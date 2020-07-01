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
                        <div class="col-md-3 contact-info">
                            <ul class="contact-info">
                                <li class="phone"><a href="tel:7187576212">(718)7576212</a></li>
                                <li class="email"><a href="mailto:justinmartinelli1@gmail.com">justinmartinelli1@gmail.com</a></li>
                                <li class="linkedin"><a href="https://www.linkedin.com/in/justin-martinelli-nyc">LinkedIn</a></li>
                                <li class="github"><a href="https://github.com/justinm-nyc">GitHub</a></li>
                            </ul>
                        </div>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Contact;
