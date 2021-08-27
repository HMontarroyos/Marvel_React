import React, { Component } from "react";
import api from "../services/api";
import Loading from "../components/Loading";
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
                <div className={"container"}>
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
                                    <div>
                                        <h1>{result.fullName}</h1>
                                        <p>{result.title}</p>
                                        {result.comics.items.length > 0 && (
                                            <>
                                                <h2>
                                                    Comics that feature works by
                                                    this creator:
                                                </h2>
                                                {result.comics.items.map(
                                                    (item) => (
                                                        <p>{item.name}</p>
                                                    )
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </>
        );
    }
}

export default Creators;
