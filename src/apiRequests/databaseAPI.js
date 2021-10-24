import axios from "axios";
import { success, failure } from "../errorHandling/toastMessages";

export const handleSignupForm = async signupFormData => {
  axios
    .post("http://localhost:4000/api/auth/signup", signupFormData)
    .then(res => success(res.data.message))
    .then(data => console.log(data))
    .catch(function (error) {
      if (error.response) {
        failure(error.response.data);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const handleLoginForm = (loginFormData, login) => {
  axios
    .post("http://localhost:4000/api/auth/login", loginFormData)
    .then(res => {
      console.log(res);
      login(res.data);
      success(res.data.message);
    })
    .catch(function (error) {
      if (error.response) {
        failure(error.response.data);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};
