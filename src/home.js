import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import arrowButton from './images/arrow-down-circle.svg';

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
                    <div >
                        <Col>
                            <h1 >WORK.</h1>
                        </Col>
                        <Projects></Projects>
                    </div>
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
            name: 'afsdfasdfas',
            position: 'Software Engineer',
            picture: 'fasfsaf',
            link: '/thisproject'
            
        },
        { 
            name: 'name2',
            position: 'Software Engineer',
            picture: 'fasfsaf',
            link: '/thisproject'
            
        },
                { 
            name: 'name3',
            position: 'Software Engineer',
            picture: 'fasfsaf',
            link: '/thisproject'
            
        }
    ]
    return (
      <div>
        {Projects.map((value, index) => {
          return <Col className="projects ">
            <Jumbotron fluid className="p-md-5 rounded">
                <Container>
                    <h1>{value.name}</h1>
                    <h5>
                    {value.position}
                    </h5>
                </Container>
            </Jumbotron>
        </Col>
        })}
      </div>
    )
    }
  };


  