import axios from 'axios';


 export default (function axiosClient() {
  function api() {
    let token = localStorage.getItem("token");
    if (token == null) {
      return axios.create({
        baseURL: import.meta.env.VITE_BASEURL,
      });
    } else {
      const x = axios.create({
        baseURL: import.meta.env.VITE_BASEURL,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // if (token) {
      //   verifyTokenExpiration(token);
      // }
      return x;
    }
  }

  return { api };
})();