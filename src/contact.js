import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Contact extends Component {
    render() {
        return (
            <div className="contact-div">
                <Container fluid>
                    <Row className="justify-content-md-center contact-row">
                        <div className="contact-inner-div">
                            <h1 className="mb-4 contact-title">CONTACT ME</h1>
                            <Col lg={6}>
                                <ul class="contact-info">
                                    <li class="phone"><a href="tel:7187576212">(718)7576212</a></li>
                                    <li class="email"><a href="mailto:justinmartinelli1@gmail.com">justinmartinelli1@gmail.com</a></li>
                                    <li class="linkedin"><a href="https://www.linkedin.com/in/justin-martinelli-nyc">LinkedIn</a></li>
                                    <li class="github"><a href="https://github.com/justinm-nyc">GitHub</a></li>
                                </ul>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;
