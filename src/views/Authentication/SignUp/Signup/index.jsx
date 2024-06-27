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

const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form className="w-100">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold">Create your Parnter account</h4>
          <h6 className=" mb-4">
            Create an account to list and manage your property.
          </h6>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            placeholder="Enter your email id"
            type="text"
            onChange={(e)=>props.updateStep(e)}
          />
          <Form.Check id="logged_in" className="form-check-sm mt-3">
            <Form.Check.Input
              name="agre"
              type="checkbox"
              className="bg-dark"
              defaultChecked
              onChange={(e)=>{
                e.target.value=e.target.checked;
                props.updateStep(e);
              }}
            />
            <Form.Check.Label className="text-muted fs-7 text-dark">
              By creating an account you specify that you have read
              and agree with our <Link to="#">Tearms of use</Link>{" "}
              and <Link to="#">Privacy policy</Link>. We may keep
              you inform about latest updates through our default{" "}
              <Link to="#">notification settings</Link>
            </Form.Check.Label>
          </Form.Check>

          <Button
            onClick={() => props.setSignUpStep(2)}
            variant="dark"
            className="btn-rounded btn-uppercase btn-block mt-4"
            as={Link}

          >
            Continue
          </Button>

          <div className="title-sm title-wth-divider divider-center my-4"></div>
          <p className="text-dark">
            Do you have questions about your property or the
            extranet? Visit Partner Help or ask another question on
            the patner Community
          </p>
          <Button
            variant="outline-dark"
            className="btn-outline btn-rounded  btn-block my-5"
            as={Link}
            to="login"
          >
            Sign in
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Signup;
