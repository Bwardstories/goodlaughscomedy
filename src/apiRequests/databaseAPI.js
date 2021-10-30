import axios from "axios";
import { success, failure } from "../errorHandling/toastMessages";

export const handleSignupForm = async registerFormData => {
  const { username, password, retypePassword, email } = registerFormData;
  if (password.length < 8 || password.length > 20) {
    failure("Password must be between 8 and 20 characters long");
    return false;
  }
  if (password !== retypePassword) {
    failure("Passwords do not match");
    return false;
  }
  axios
    .post("http://localhost:4000/api/auth/signup", registerFormData)
    .then(res => success(res.data.message))
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

export const saveEventToDB = eventToDBData => {
  axios
    .post("http://localhost:4000/api/events/createEvent", eventToDBData)
    .then(res => {
      console.log(res, "from save event");
      // success(res.data.message);
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
