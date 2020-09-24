import axios from 'axios';

const KEY = 'AIzaSyDDDAx853Sq4xUG_IfkpX1DUDUeaOhxnnE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});