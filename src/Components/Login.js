import React, { useContext } from "react";
import * as YUP from "yup";
import { Link, useHistroy } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { AppContext } from "../App";

function Login() {
  const histroy = useHistroy();
  const [log, setLog] = useContext(AppContext);

  //send login

  // signin Schema using yup

  const signInSchema = YUP.object().shape({
    email: YUP.string().email().required("Please Enter Your email"),

    password: YUP.string()
      .min(6, "password should be more than 5 characters")
      .required("Please enter your password"),
  });

  return (
    <>
      <div className="bg-primary card-container">
        <Card className="card" border="secondary">
          <Card.Header className="text-center">
            <h4 className="text-dark">Login</h4>
          </Card.Header>
          <Button color="primary">Come</Button>
        </Card>
      </div>
    </>
  );
}

export default Login;
