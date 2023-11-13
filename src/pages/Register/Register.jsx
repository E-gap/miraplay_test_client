import React from "react";
import css from "./Register.module.css";
import Container from "../../components/Container/Container";
import FormSign from "../../components/FormSign/FormSign";

function Register() {
  return (
    <section className={css.registerPage}>
      <Container>
        <h1 className={css.titlePage}>Register</h1>
        <FormSign sign="signUp" />
      </Container>
    </section>
  );
}

export default Register;
