import http from "../axios";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(email) {
    return http.get(`/users/${email}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }
}

export default new UserDataService();
