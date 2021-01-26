import http from "../axios";

class DocumentDataService {
  getMaxPart() {
    return http.get("/documents/maxpartnum")
  }

  getAll(query = null) {
    if(query != null) {
      return http.get("/documents" + query);
    } else
      return http.get("/documents");
  }

  get(id) {
    return http.get(`/documents/${id}`);
  }

  getClasses() {
    return http.get(`/documents/classes`);
  }

  create(data) {
    return http.post("/documents", data);
  }

  update(id, data) {
    return http.put(`/documents/${id}`, data);
  }

  delete(id) {
    return http.delete(`/documents/${id}`);
  }

  deleteAll() {
    return http.delete(`/documents`);
  }

  findByProject(project) {
    return http.get(`/documents?project=${project}`);
  }
}

export default new DocumentDataService();
