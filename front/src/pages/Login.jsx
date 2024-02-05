import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import LoginForm from "../components/Login/LoginForm";
import "../css/Login.css";
import LoginContextConsumer from "../contexts/LoginContextConsumer";

function Login() {

  return (
    <>
      <Header />
      <LoginForm/>
      <Footer />
    </>
  );
}

export default Login;