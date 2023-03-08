import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "./Card";
import axios from 'axios';
import { useRef } from 'react';

function Header()
{
    const inputRef = useRef(null);
    function fetchdata(){        
        axios.get('/https://group-3-backend.onrender.com?zip='+ inputRef.current.value)
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
                <label for="city">City / State: </label>
                <input ref={inputRef} type="text" id="city" name="city"></input>
                <Button onClick={fetchdata} variant="success">Submit</Button>{' '}
                <Card />
            </header>
        )
    }

export default Header