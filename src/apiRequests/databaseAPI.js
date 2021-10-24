import axios from "axios";
import { toast } from "react-toastify";

export const signup = async signupFormData => {
  const signupFailure = err => {
    toast.error(err);
  };
  const signupSuccess = message => {
    toast.success(message);
  };

  axios
    .post("http://localhost:4000/api/auth/signup", signupFormData)
    .then(res => signupSuccess(res.data.message))
    .then(data => console.log(data))
    .catch(function (error) {
      if (error.response) {
        signupFailure(error.response.data);
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
