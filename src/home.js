import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import arrowButton from './images/arrow-down-circle.svg';
import scientificImagingSoftwareImage from './images/scientific-imaging-screenshots/screenshot1.png';
import hptaProcesingSimulatorImage from './images/hpat-processing-simulator-screenshots/screenshot1.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div>
                        <Col>
                            <h1>Hi, I'm Justin.</h1>
                            <h4 className="home-pt-2">I'm a software engineer with experience designing and building user interfaces for web and mobile applications. </h4>
                            <h4>Want to collaborate? Let's chat</h4>
                        </Col>
                        <Col className="arrow-column">
                        <h4>Check out some of my work below</h4>
                            <Image className="arrow-button" src={arrowButton} alt="" width="32" height="32" title="Bootstrap"/>
                        </Col>
                    </div>
                </div>
                <div id="work" className="work-content">
                    <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col lg={6}>
                            <h1 className="work-title border-bottom pb-3 mb-4">WORK</h1>
                        </Col>
                        </Row>
                    </Container>
                    <Projects></Projects>
                </div>
            </div>
        );
    }
}

export default Home;

class Projects extends Component {
    render(){
    const Projects =[
        { 
            name: 'High Performance Autonomous Transaction Processing Simulator',
            position: 'Full Stack Engineer',
            picture: hptaProcesingSimulatorImage,
            link: '/HPAT-processing-simulator'
            
        },
        { 
            name: 'Scientific Imaging Software ',
            position: 'Full Stack Engineer',
            picture: scientificImagingSoftwareImage,
            link: '/scientific-imaging-software'
            
        },
                { 
            name: 'Jeopardy Helper',
            position: 'Software Engineer',
            picture: 'fasfsaf',
            link: '/jeopardy-helper'
            
        }
    ]
    return (
      <Container fluid>
        {Projects.map((value, index) => {
          return  <div className="projects">

            <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron fluid className="p-md-5 rounded">
                <Container>
                    <Row>
                        <Col className="project-details-col" lg={8}>
                            <a className="project-name" href={value.link}>
                                <h1>{value.name}</h1> 
                            </a>
                            <h5 className="title-description">{value.position}</h5>
                            <a href={value.link}>Learn more</a>
                        </Col>
                        <Col lg={4}>
                            <Image fluid className="image-border" src={value.picture} alt="" title="Bootstrap"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            </Col>
        </div>
        })}
      </Container>
    )
    }
  };


  