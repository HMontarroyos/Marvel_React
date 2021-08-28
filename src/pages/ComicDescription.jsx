import React, { Component } from "react";
import moment from "moment";
import api from "../services/api";
import Loading from "../components/Loading";

import "../style/ComicDescription.scss";

class ComicDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        };
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const result = await api
            .get(`/comics/${id}`)
            .then(({ data: { data } }) => data.results)
            .catch((err) => {
                console.error(err);
            });

        this.setState({ result });
    }

    render() {
        return (
            <>
                {this.state.result.length === 0 && (
                    <div className="loading">
                        <Loading />
                    </div>
                )}

                <div>
                    {this.state.result.map((result) => (
                        <>
                            <div className="container-single">
                                <img
                                    src={`${result.images[0].path}.${result.images[0].extension}`}
                                    alt={"capa"}
                                />
                                <div className="container_text">
                                    <h1>{result.series.name}</h1>
                                    <p>{result.title}</p>
                                    <div>
                                        {moment(result.modified).isValid() && (
                                            <>
                                                <h2>Published:</h2>
                                                <p className="paragrafh">
                                                    {moment(
                                                        result.modified
                                                    ).format("LL")}
                                                </p>
                                            </>
                                        )}

                                        <h2>Number of Pages: </h2>
                                        <p className="paragrafh">
                                            {result.pageCount > 0
                                                ? result.pageCount
                                                : `Not Specified`}
                                        </p>
                                    </div>
                                    {result.creators.items.length > 0 && (
                                        <>
                                            <h2>Creators:</h2>
                                            {result.creators.items.map(
                                                (item) => (
                                                    <p>{item.name}</p>
                                                )
                                            )}
                                        </>
                                    )}
                                    {result.description && (
                                        <>
                                            <h2>Description:</h2>
                                            <p>
                                                {result.description.replace(
                                                    /(<([^>]+)>)/gi,
                                                    ""
                                                )}
                                            </p>
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
export default ComicDescription;
