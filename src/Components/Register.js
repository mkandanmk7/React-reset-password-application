import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import * as YUP from "yup";

function Register() {
  const [info, setInfo] = useState("");

  const createAccount = async () => {
    console.log("acc created ");
  };

  const signInSchema = YUP.object().shape({
    username: YUP.string().required("Please enter username"),
    email: YUP.string().email().required("Please Enter Your Email"),
    password: YUP.string()
      .min(6, "password should be greather than 5 characters")
      .required("Enter your password"),
  });

  return (
    <>
      <div className="bg-primary card-container">
        <Card className="card" border="secondary">
          <Card.Header className="text-center">
            <h4 className="text-dark">Create Account</h4>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={signInSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                let reset = createAccount(values);
                resetForm();
              }}
            >
              {() => {
                return (
                  <Form>
                    <div className="form-group mb-3">
                      <label className="text-start" for="email">
                        User Name
                      </label>
                      <Field
                        className="form-control link"
                        id="username"
                        type="text"
                        name="username"
                        component="input"
                      />
                      <div className="error">
                        <ErrorMessage name="username" />{" "}
                      </div>
                    </div>

                    {/* email */}
                    <div className="form-group mb-3">
                      <label for="email">Email</label>
                      <Field
                        class="form-control link"
                        id="email"
                        type="email"
                        name="email"
                        component="input"
                      />
                      <div className="error">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    {/* password */}
                    <div className="form-group mb-3">
                      <label for="password">Password</label>
                      <Field
                        className="form-control link"
                        component="input"
                        type="password"
                        id="password"
                        name="password"
                      />
                      <div class="error">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button type="submit" variant="success">
                        Create
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="text-success">
              <h3>{info}</h3>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Register;
