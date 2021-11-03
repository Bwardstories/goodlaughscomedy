import axios from "axios";
import { success, failure } from "../errorHandling/toastMessages";

const baseURL = "http://localhost:4000/api/";

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
    .post(`${baseURL}auth/signup`, registerFormData)
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
    .post(`${baseURL}auth/login`, loginFormData)
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
    .post(`${baseURL}events/createEvent`, eventToDBData)
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

export const getEvents = () => {
  return axios
    .get(`${baseURL}events/getEvents`)
    .then(res => {
      console.log(res, "getevents");
      success(res.data.message);
      return res.data;
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
