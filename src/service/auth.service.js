import axios from "axios";

const API_URL = "http://localhost:9004/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  updateUser(username, email, password, nom, prenom, telephone, sexe) {
    const user = this.getCurrentUser();
    if (user) {
      const updatedUser = {
        ...user,
        username,
        email,
        password,
        nom,
        prenom,
        telephone,
        sexe,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return axios.put(`${API_URL}update/${user.id}`, updatedUser);
    } else {
      return Promise.reject("No user is currently logged in.");
    }
  }

  register(username, email, password, image, nom, prenom, telephone, sexe, roles) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      image,
      nom,
      prenom,
      telephone,
      sexe,
      role: roles,
    });
  }

  updateSolde(id) {
    return axios.put(`${API_URL}updateSolde/${id}`);
  }
  updateEtat(id) {
    return axios.put(`${API_URL}updateEtat/${id}`);
  }

  updateEtatTrue(id) {
    return axios.put(`${API_URL}UpdateEtatTrue/${id}`);
  }

  updateEtatFalse(id) {
    return axios.put(`${API_URL}UpdateEtatFalse/${id}`);
  }
  update(user) {
    console.log(user);
    return axios.put(`${API_URL}update/${user.id}`, user);
  }
  delete(id) {
    return axios.delete(`${API_URL}delete/${id}`);
  }
  getUserById(id) {
    return axios.get(`${API_URL}user/${id}`);
  }
  getUsers() {
    return axios.get(API_URL + "userrr");
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
