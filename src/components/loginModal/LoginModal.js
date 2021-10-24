import React from "react";
import { signup } from "../../apiRequests/databaseAPI";
import "./loginModal.css";

const LoginModal = () => {
  return (
    <div className="modalContainer">
      <button
        onClick={() => {
          signup({
            username: "brian",
            email: "brianwardfo8@gmail.com",
            password: "helloworld",
          });
        }}>
        Signups;lkhgs;orgjmkwerp;iotjmwraeb;itjwaerm;lktjwer;nlkgjar;lekjtba;erlwkjtnb;awerljktnwaer;lktjgbvar;ewlijtnaw;eorktjnbva;wlerijut
      </button>
    </div>
  );
};

export default LoginModal;
