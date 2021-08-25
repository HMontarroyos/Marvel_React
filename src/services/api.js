import axios from "axios";

const ts = process.env.REACT_APP_TIME_STAMP;
const apikey = process.env.REACT_APP_API_KEY;
const hash = process.env.REACT_APP_MD5;

/* fetch(
    `http://gateway.marvel.com/v1/public/creators?ts=${ts}&apikey=${apikey}&hash=${hash}`
)
    .then((res) => {
        return res.json();
    })
    .then((jsonParsed) => {
        this.setState({
            results: jsonParsed.data.results,
        });
    }); */

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public",
    params: {
        ts,
        apikey,
        hash,
        offset: 0,
        limit: 100,
    },
});

export default api;
