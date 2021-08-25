import React, { Component } from "react";
import api from "../services/api";
class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    async componentDidMount() {
        const results = await api
            .get("/characters")
            .then(({ data: { data } }) => data.results)
            .catch((err) => {
                console.error(err);
            });
        this.setState({
            results,
        });
    }

    render() {
        return (
            <div>
                {console.log(`RESULTS`, this.state.results)}

                {/*                 {console.log(`STATE`, this.state.results)}
{this.state.results.map((item) => (
<h1>{item.title}</h1>
))} */}
            </div>
        );
    }
}

export default Characters;
