import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import CommanFooter1 from "../../CommanFooter1";
import bgVideo from "../../../../assets/video/signupBg.mp4";

//Images
import logo from "../../../../assets/img/logo-light.png";
import signupBg from "../../../../assets/img/signup-bg.jpg";
import slide1 from "../../../../assets/img/slide1.jpg";
import slide2 from "../../../../assets/img/slide2.jpg";

const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="hk-pg-wrapper py-0">
      <div className="hk-pg-body py-0">
        <Container fluid>
          <Row className="auth-split">
            <Col
              xl={5}
              lg={6}
              md={5}
              className=" p-0 d-md-block d-none position-relative overflow-hidden"
            >
              <video className=" bg-img" autoPlay loop muted src={bgVideo} />
            </Col>
            <Col
              xl={7}
              lg={6}
              md={7}
              sm={10}
              className="position-relative mx-auto"
            >
              <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                <div className="text-center mb-7">
                  <Link to="/" className="navbar-brand me-0">
                    <img
                      className="brand-img d-inline-block w-45"
                      src={logo}
                      alt="brand"
                    />
                  </Link>
                </div>
                <Form className="w-100">
                  <Row>
                    <Col xxl={5} xl={7} lg={10} className="mx-auto">
                      <h4 className=" mb-4 fw-bold scale-vf-font">Create your Parnter account</h4>
                      <h6 className=" mb-4">
                        Create an account to list and manage your property.
                      </h6>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        placeholder="Enter your email id"
                        type="text"
                      />
                      <Form.Check id="logged_in" className="form-check-sm mt-3">
                        <Form.Check.Input
                          type="checkbox"
                          className="bg-dark"
                          defaultChecked
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
                        variant="dark"
                        className="btn-rounded btn-uppercase btn-block mt-4"
                        as={Link}
                        to="/auth/signup-step-2"
                        
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
              </div>
              {/* Page Footer */}
              <CommanFooter1 />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
