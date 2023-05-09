import React from "react";
import Nav from 'react-bootstrap/Nav';

function Header() {
  return(
    <div id="Nav">
      <Nav className="justify-content-center" activeKey="/home">
        <h1> Weather Info</h1>
        
        <Nav.Item>
          <Nav.Link id="Nav" href="#App-header">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link id="Nav" href="#footer">Team</Nav.Link>
        </Nav.Item >
          
        <Nav.Item>
          <Nav.Link id="Nav" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
  
  export default Header;