import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';


function RestREviews({ reviews }) {


    return (
        <>
            <Accordion defaultActiveKey="0" style={{ width: "400px" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body >
                        {
                            reviews.map(item => (
                                <ListGroup >
                                    <ListGroup.Item >name:{item.name}</ListGroup.Item>
                                    <ListGroup.Item>date:{item.date}</ListGroup.Item>
                                    <ListGroup.Item>rating:{item.rating}</ListGroup.Item>
                                    <ListGroup.Item>comments:{item.comments}</ListGroup.Item>
                                    <hr></hr>
                                </ListGroup>
                               
                              
                            ))
                        }

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default RestREviews