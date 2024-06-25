import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
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

const SignUpStep2 = (props) => {
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
                      <h4 className=" mb-4 fw-bold">
                        Authorized person contact details
                      </h4>
                      <h6 className=" mb-4">
                        Your full name and phone number are needed to ensure the
                        security of your liveinhotels account.
                      </h6>
                      <Row>
                        <Col sm={6}>
                          <Form.Label>First name</Form.Label>
                          <Form.Control
                            placeholder="Enter your first name"
                            type="text"
                          />
                        </Col>
                        <Col sm={6}>
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            placeholder="Enter your last name"
                            type="text"
                          />
                        </Col>
                        <Form.Label className="mt-3">Phone number</Form.Label>
                        <InputGroup className="mb-3">
                          <DropdownButton
                            variant="outline-secondary"
                            title="+94"
                            id="input-group-dropdown-1"
                          >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">
                              Separated link
                            </Dropdown.Item>
                          </DropdownButton>
                          <Form.Control aria-label="Text input with dropdown button" 
                          placeholder="00 0000 000"/>
                        </InputGroup>
                      </Row>
                      <p>{`We'll text a two-factor authentication code to this number when you sign in`}</p>
                     

                      <Button
                        variant="dark"
                        className="btn-rounded btn-uppercase btn-block mt-4"
                        as={Link}
                        to="/auth/signup-step-3"
                      >
                        Next
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

export default SignUpStep2;
