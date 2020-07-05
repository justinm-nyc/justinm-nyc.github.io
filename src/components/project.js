import React, { Component, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';

class Project extends Component {
    
    render() {

        return (
        <div>
        <Container fluid>
            <div>
                <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col lg={6}>
                               <h1 className="work-title border-bottom pb-3 mb-4">{this.props.valueFromParent[0]}</h1>
                            </Col>
                        </Row>
                </Container>
            </div>
            <div className="projects">
                <Col md={{ span: 8, offset: 2 }}>
                    <Container className="mb-4 pb-3">
                    <CarouselImages images={this.props.valueFromParent[5]}></CarouselImages>
                    </Container>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <Container>
                        <Row>
                            <Col className="project-details-col" lg={6}>
                                <h1 className="project-name">Description</h1> 
                                <p>{this.props.valueFromParent[1]}</p>
                                <Accordion>
                                    <ContextAwareToggle eventKey="0"></ContextAwareToggle>
                                    <Accordion.Collapse  eventKey="0"><p>{this.props.valueFromParent[2]}</p>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Col>
                            <Col className="project-details-col" lg={6}>
                                <h1 className="project-name">Role</h1> 
                                <p>{this.props.valueFromParent[3]}</p>
                                <h1 className="project-name">Technologies</h1>
                                <TechnologiesList technologies={this.props.valueFromParent[4]}></TechnologiesList>
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

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;
    
    return (
        <div className="expand-button">
            {isCurrentEventKey ? (
                <Button
                onClick={decoratedOnClick}>
                Hide Full Description
                </Button>
            ) : (
                <Button
                onClick={decoratedOnClick}>
                Read Full Description
                </Button>
            )}
        </div>
        );
      }


function TechnologiesList({technologies}){
    var techList = technologies.map(function(tech){
                    return <li>{tech}</li>;
                    })
                    
    return (
        <ul>{ techList }</ul>
    )
}

function CarouselImages({images}){
    var imageList = images.map(function(image){
                    return <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image}
                    alt="Slide"
                    />
                </Carousel.Item>
                    })
                    
    return (
        <Carousel>{ imageList } </Carousel>
    )
}