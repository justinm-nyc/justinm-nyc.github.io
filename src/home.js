import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import arrowButton from './images/arrow-down-circle.svg';
import tempSiteImage from './images/tempSiteImage.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div>
                        <Col>
                            <h1>Hi, I'm Justin.</h1>
                            <h5 className="home-pt-2">I'm a software engineer with experience designing and building user interfaces for web and mobile applications. </h5>
                            <h5>Want to collaborate? Let's chat.</h5>
                        </Col>
                        <Col className="arrow-column">
                            <Image className="arrow-button" src={arrowButton} alt="" width="32" height="32" title="Bootstrap"/>
                        </Col>
                    </div>
                </div>
                <div id="work" className="work-content">
                    <Container fluid>
                        <Col>
                            <h1 >WORK </h1>
                        </Col>
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
            picture: 'fasfsaf',
            link: '/thisproject'
            
        },
        { 
            name: 'Scientific Imaging Software ',
            position: 'Full Stack Engineer',
            picture: 'fasfsaf',
            link: '/thisproject'
            
        },
                { 
            name: 'Jeapardy Helper',
            position: 'Software Engineer',
            picture: 'fasfsaf',
            link: '/thisproject'
            
        }
    ]
    return (
      <Container fluid>
        {Projects.map((value, index) => {
          return  <div className="projects">

            <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron fluid className="p-md-5 rounded">
                <Container>
                    <row>
                        <Col className="project-details-col" sm={8}>
                            <h1 className="project-name">{value.name}</h1>
                            <p className="title-description">{value.position}</p>
                        </Col>
                        <Col sm={4}>
                            <Image fluid className="" src={tempSiteImage} alt="" title="Bootstrap"/>

                        </Col>
                    </row>
                </Container>
            </Jumbotron>

            </Col>
        </div>
        })}
      </Container>
    )
    }
  };


  