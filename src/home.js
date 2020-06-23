import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
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
                <div className="work-div">
                    <Col>
                        <h1 >Hi, I'm Justin.</h1>
                        <h5>I'm a software engineer with experience designing and building user interfaces for web and mobile applications. </h5>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Home;
