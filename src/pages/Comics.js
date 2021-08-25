import React, { Component } from "react";
import api from "../services/api";
import "../style/Comics.scss";
import "../components/Pagination/pagination.scss";
import Loading from "../components/Loading";
import ReactPaginate from "react-paginate";
/* import Cursor from "react-custom-pointer";
import Img from "../assets/america_shield.png"; */

class Comics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    async componentDidMount() {
        const results = await api
            .get("/comics")
            .then(({ data: { data } }) => data)
            .catch((err) => {
                console.error(err);
            });
        console.log(`RESULTS`, results);
        const comicsWithCover = results.results
            .filter((result) => result.images.length > 0)
            .sort((a, b) => {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            });
        this.setState({
            results: comicsWithCover,
            pageCount: Math.ceil(results.total / results.limit),
        });
    }

    render() {
        return (
            <>
                {/*                 <Cursor type="default">
                    <img src={Img} />
                </Cursor> */}
                {this.state.results.length === 0 && (
                    <div className="loading">
                        <Loading />
                    </div>
                )}
                {console.log(`RESULTS`, this.state.results)}
                <div className={"container"}>
                    {this.state.results.length > 0 &&
                        this.state.results.map((result) => (
                            <div className={"container_comic"} key={result.id}>
                                <img
                                    src={`${result.images[0].path}.${result.images[0].extension}`}
                                    alt={"capa"}
                                />
                                <div className={"container_column"}>
                                    <div>
                                        <h1>{result.series.name}</h1>
                                        <p>{result.title}</p>
                                        <p>{`Number of Pages: ${
                                            result.pageCount > 0
                                                ? result.pageCount
                                                : `Not Specified`
                                        }`}</p>
                                    </div>
                                    <button>See More</button>
                                </div>
                            </div>
                        ))}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    /* onPageChange={this.handlePageClick} */
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </>
        );
    }
}
export default Comics;
