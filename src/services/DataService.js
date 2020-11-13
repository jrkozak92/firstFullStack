import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/db");
    }

    get(id) {
        return http.get(`/db/${id}`);
    }

    create(data) {
        return http.post("/db", data);
    }

    update(id, data) {
        return http.put(`/db/${id}`, data);
    }

    delete(id) {
        return http.delete(`/db/${id}`);
    }

    deleteAll() {
        return http.delete('/db');
    }

    findByTitle(title) {
        return http.get(`/db?title=${title}`);
    }

    check(pass) {
        if (pass == 'duh') {
            return this.response.authorized = true;
        } else {
            return this.response.authorized = false;
        }
    }
}

export default new DataService();