import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "./Card";

class Header extends React.Component{
    render(){
        return(            
            <header className="App-header">
                <Card />
                <form action="/action_page.php">
                <label for="city">City / State: </label>
                <input type="text" id="city" name="city"></input>
                <Button variant="success">Submit</Button>{' '}
                </form>
            </header>
        )
    }
}

export default Header