import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <> <Navbar style={{ backgroundColor: "lightblue",marginBottom:"30px" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/153588168-plate-with-fork-and-spoon-restaurant-logo.jpg?ver=6"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          ResSha Cafe
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}

export default Header