import React,  { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Home extends Component {
    render() {
        return (
            <div className="home-div">
                <Col>
                    <h1 >Hi, I'm Justin.</h1>
                    <h5>I'm a software engineer with experience designing and building user interfaces for web and mobile applications. </h5>
                </Col>
            </div>
        );
    }
}

export default Home;
