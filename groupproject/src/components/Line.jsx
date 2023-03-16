import React from "react";
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

function Line() {
  return(
    <div id="footer">
        <Nav id="footer" className="justify-content-center" activeKey="/home">
          <h1> Weather Info</h1>
        <Nav.Item>
          <Nav.Link id="footer" href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="footer" href="#info">Group Members</Nav.Link>
        </Nav.Item >
        <Nav.Item>
        <Nav.Link id="footer" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
  
  export default Line;