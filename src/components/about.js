import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import thumbnailPic from '../images/justin-m-icon-pic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class About extends Component {
    render() {
        return (
            <div className="content about">
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <h1 className="mb-4 about-title">ABOUT ME</h1>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg={8}>
                            <Image className="icon-pic" src={thumbnailPic} roundedCircle />
                            <p>I am a life long learner, reader, traveler, documentary lover, humanitarian, and software engineer. I love learning new ways of building things.<br></br> <br></br>
                            I enjoy working collaboratively with talented and knowledgeable people and exchanging new skills. I'm always aiming to grow in as many ways possible. <br></br><br></br>
                            Feel to reach out to me via <a href="mailto:justinmartinelli1@gmail.com">email</a> or follow me on <a href="https://www.linkedin.com/in/justin-martinelli-nyc">Linkedin</a> or <a href="https://github.com/justinm-nyc">Github</a>.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
