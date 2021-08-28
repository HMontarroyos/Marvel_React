import React, { Component } from "react";
import api from "../services/api";
import Loading from "../components/Loading";

import "../style/CreatorDescription.scss";

class CreatorDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        };
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const result = await api
            .get(`/creators/${id}`)
            .then(({ data: { data } }) => data.results)
            .catch((err) => {
                console.error(err);
            });

        this.setState({ result });

        console.log(`CREATORS`, result);
    }

    render() {
        return (
            <>
                {this.state.result.length === 0 && (
                    <div className="loading">
                        <Loading />
                    </div>
                )}

                <div className="container_view_creator_description">
                    {this.state.result.map((result) => (
                        <>
                            <div className="container-creator-single">
                                <img
                                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                    alt={"avatar"}
                                />
                                <div className="container_description">
                                    <h1>{result.fullName}</h1>
                                    <h2>Published Comic Books</h2>
                                    {result.comics.items.length > 0 && (
                                        <>
                                            <h3>Comics:</h3>
                                            {result.comics.items.map((item) => (
                                                <p>{item.name}</p>
                                            ))}
                                        </>
                                    )}
                                    {result.events.items.length > 0 && (
                                        <>
                                            <h3>Events:</h3>
                                            {result.events.items.map((item) => (
                                                <p>{item.name}</p>
                                            ))}
                                        </>
                                    )}
                                    {result.series.items.length > 0 && (
                                        <>
                                            <h3>Series:</h3>
                                            {result.series.items.map((item) => (
                                                <p>{item.name}</p>
                                            ))}
                                        </>
                                    )}
                                    {result.stories.items.length > 0 && (
                                        <>
                                            <h3>Stories:</h3>
                                            {result.stories.items.map(
                                                (item) => (
                                                    <p>{item.name}</p>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </>
        );
    }
}
export default CreatorDescription;
