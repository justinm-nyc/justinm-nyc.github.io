import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import thumbnailPic from './images/justin-m-icon-pic.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="content">
                <div className="contact-div">
                    <h1> CONTACT </h1>
                    <Col>
                        <Image className="icon-pic" src={thumbnailPic} roundedCircle />
                    </Col>
                    <Col>
                        <h1 className="">JUSTIN MARTINELLI</h1>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Contact;
