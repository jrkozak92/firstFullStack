import axios from "axios";

export default axios.create({
    baseURL: "https://www.joeykozak.com/site-manager/",
    headers: {
        "Content-type": "application/json"
    }
});