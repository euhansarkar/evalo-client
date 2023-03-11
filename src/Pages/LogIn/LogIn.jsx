import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(
    localStorage.getItem(`userTokenTime`) ? true : false
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend
    // console.log("Submitting form:", { firstName, lastName, email, password });

    if (
      email !== `` &&
      password !== `` &&
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      axios
        .post(`http://localhost:5000/api/signin`, {
          email,
          password,
        })
        .then((res) => {
          if (res.status) {
            
            navigate(`/`);
            toast.success(`login successful`);
            alert(`login successful`);
          }

          const data = {
            token: res.data.token,
            time: Date.now(),
          };
          localStorage.setItem(`userTokenTime`, JSON.stringify(data));
          setRedirect(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(`please valid details`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default LogIn;
