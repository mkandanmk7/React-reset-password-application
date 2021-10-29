import React, { useContext } from "react";
import * as YUP from "yup";

import { Card, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { AppContext } from "../App";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const histroy = useHistory();
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
          <Card.Body>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={signInSchema}
              onSubmit={(values) => {
                console.log(values);
                // // let reset = sendLogin(values);
                // if (reset) console.log(log);
                // setLog(true);
                // histroy.push("/protected");
              }}
            >
              {() => {
                return (
                  <Form>
                    <div className="form-group mb-3">
                      <label for="email">Email</label>
                      <Field
                        className="form-control link"
                        id="email"
                        type="email"
                        name="email"
                        component="input"
                      />
                      <div className="error">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label for="password">Password</label>
                      <Link to="/forgot">
                        <p className="forgotpass">forgot password?</p>
                      </Link>
                      <Field
                        className="form-control inputfield"
                        id="password"
                        type="password"
                        name="password"
                        component="input"
                      />
                      <div className="error">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button type="submit" variant="primary">
                        Log In
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="mt-3">
              <Link to="/register" className="ac link">
                New Here? Create Account
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login;
