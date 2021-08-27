import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import Button from "../components/Button";

import "../style/Creators.scss";
class Creators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    async componentDidMount() {
        const results = await api
            .get("/creators")
            .then(({ data: { data } }) => data.results)
            .catch((err) => {
                console.error(err);
            });

        const CreatorWithDescriptionOfTheComics = results
            .filter((result) => result.comics.items.length > 0)
            .sort((a, b) => {
                return a.fullName < b.fullName
                    ? -1
                    : a.fullName > b.fullName
                    ? 1
                    : 0;
            });

        this.setState({
            results: CreatorWithDescriptionOfTheComics,
        });
    }
    render() {
        return (
            <>
                {this.state.results.length === 0 && (
                    <div className="loading">
                        <Loading />
                    </div>
                )}
                {console.log(this.state.results)}
                <div className={"container_view_creators"}>
                    {this.state.results.length > 0 &&
                        this.state.results.map((result) => (
                            <div
                                className={"container_creators"}
                                key={result.id}
                            >
                                <img
                                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                    alt={"avatar"}
                                />
                                <div className={"container_name_creator"}>
                                    <h1>{result.fullName}</h1>
                                </div>
                                <Link to={`/creators/${result.id}`}>
                                    <Button>See more</Button>
                                </Link>
                                {/*                                         {result.comics.items.length > 0 && (
                                            <>
                                                <h2>
                                                    Comics that feature works by
                                                    this creator:
                                                </h2>
                                                {result.comics.items.map(
                                                    (item) => (
                                                        <p>{item.name}</p>
                                                    )
                                                )} */}
                            </div>
                        ))}
                </div>
            </>
        );
    }
}

export default Creators;
