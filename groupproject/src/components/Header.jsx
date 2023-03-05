import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "./Card";
import axios from 'axios';

function Header(){
    function fetchdata(){
        axios.get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    }
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

export default Header