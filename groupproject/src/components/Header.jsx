import React from "react";
import Button from 'react-bootstrap/Button';

class Header extends React.Component{
    render(){
        return(            
            <header className="App-header">
                    <form action="/action_page.php">
                    <label for="city">City: </label>
                    <input type="text" id="city" name="city"></input>
                    <Button variant="success">Submit</Button>{' '}
                    </form>
            </header>
        )
    }
}

export default Header