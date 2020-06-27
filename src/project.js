import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import screenshot1 from './images/scientific-imaging-screenshots/screenshot1.png'
import screenshot2 from './images/scientific-imaging-screenshots/screenshot2.png'
import screenshot3 from './images/scientific-imaging-screenshots/screenshot3.png'
import screenshot4 from './images/scientific-imaging-screenshots/screenshot4.png'

class Project extends Component {
    render() {
        return (
        <div>

        <Container fluid>
            <div>
                <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                                <h1 className="work-title border-bottom pb-3 mb-4">Scientific Imaging Software </h1>
                            </Col>
                        </Row>
                </Container>
            </div>
            <div className="projects">
                <Col md={{ span: 8, offset: 2 }}>
                    <Container className="mb-4 pb-3">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={screenshot1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={screenshot2}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={screenshot3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={screenshot4}
                                alt="Fourth slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </Container>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <Container>
                        <Row>
                            <Col className="project-details-col" lg={6}>
                                <h1 className="project-name">Description</h1> 
                                <p className="title-description"> The Scientific Imaging Software utilizes Oracle Blockchain Cloud Service and Object Storage to automatically upload and track data streamed from laboratory equipment. <br></br> <br></br>

In the scientific industry, laboratories face many challenges involving data integrity, data access, and data tracking. As a chief technology officer for a scientific laboratory, you need to understand who has access to your data, information on where that data has been accessed, and that data all needs to be auditable. Using the blockchain cloud service, an immutable ledger, you can permit access to that data and allow other people to come and audit that data directly. <br></br> <br></br>

After taking an image of a slide with the USB microscope, that information is stored in object storage and a record of that image is going to be placed onto the blockchain. Then we use a web interface to view the information on the blockchain, update that blockchain and get a full and detailed history of everything that is stored on the blockchain. <br></br> <br></br>

The image that was captured is then populated on the interface, it can be downloaded for analysis, and the analysis document can then be uploaded using the interface. All these events like downloading and uploading are saved to the blockchain, thus when you click the 'View History' button, you can see a table populated with the document's history from the blockchain. The Oracle Blockchain Cloud Service is used to store all data that is generated, all analysis and report documents, and a history of the data that is accessed. Oracle Object Storage is utilized to store and persist the data. The Oracle Scientific Imaging interface shows us how we can use blockchain to maintain a secure distributed ledger that provides value across the business from data collection, tracking, to auditing. </p>
                            </Col>
                            <Col className="project-details-col" lg={6}>
                                <h1 className="project-name">My Role</h1> 
                                <p className="title-description"> Software Engineer </p>
                                <h1 className="project-name">Technologies</h1> 
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </div>

        </Container>
        </div>
        );
    }
}

export default Project;
