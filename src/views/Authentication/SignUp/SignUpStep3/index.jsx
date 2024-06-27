import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpStep3 = (props) => {

  return (
    <Form className="w-100">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold">Create password</h4>
          <h6 className=" mb-4">
            Use a minimum of 10 characters, including uppercare
            letters, lowercase letters and numbers.
          </h6>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => props.updateStep(e)}
          />
          <Form.Label className="mt-4">Confirm password</Form.Label>
          <Form.Control
            name="chechPassword"
            placeholder="Confirm your password"
            type="password"
          />

          <Button
            onClick={() => props.setSignUpStep(3)}
            variant="dark"
            className="btn-rounded  btn-block mt-4"
            as={Link}
          >
            Create account
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUpStep3;
