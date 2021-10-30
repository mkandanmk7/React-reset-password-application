import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function ChangePass() {
  const param = useParams();
  const id = param.id;
  const token = param.token;

  //states

  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");

  //handleChange()
  const handleChange = ({ target: { name, value } }) => {
    if (name === "password") setPassword(value);
    if (name === "password1") setPassword(value);
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInfo("");
    console.log("password is:  ", password);
    if (password.length <= 5) {
      setErr("ivalid password");
      return false;
    } else if (password !== password1) {
      setErr("password donot matching");
      return false;
    }
    try {
      const res = await axios.post(``, {
        password: password,
      });
      console.log(res);
      setPassword("");
      setPassword1("");
      setErr("");
      setInfo("Please log in again with the new password", res.data);
    } catch (err) {
      console.log(err);
      setErr(err.res.data);
    }
  };
  return (
    <>
      <div className="bg-primary card-container">
        <Card className="card" border="secondary">
          <Card.Header className="text-center">
            <h4 className="text-dark">Change Password</h4>
          </Card.Header>
          <Card.Body>
            <form>
              <div className="form-group">
                <label for="email">New password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="email">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
                <p className="error">{err}</p>
              </div>
              <Button type="submit" onClick={handleSubmit}>
                Change
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ChangePass;
