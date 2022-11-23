import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import { ListGroup } from 'react-bootstrap';
function RestOp({operate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
     <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
            <ListGroup.Item>Monday:{operate.Monday}</ListGroup.Item>
            <ListGroup.Item>Monday:{operate.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Monday:{operate.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Monday:{operate.Thursday}</ListGroup.Item>
            <ListGroup.Item>Monday:{operate.Friday}</ListGroup.Item>
            <ListGroup.Item>Monday:{operate.Saturday}</ListGroup.Item>

        </ListGroup>
      </Modal.Body>
      
    </Modal>
  </>
  )
}

export default RestOp