import React from "react";

function Footer() {
    const currentDate = new Date().toLocaleString('default', { month: 'long', year: "numeric" });
    return (
        <div id="footer">
            <p id="footer">MRA &copy; {currentDate} </p>
            <p id="footer">This is a group project by : </p>          
            <p id="footer">Adeola Ogundipe</p> 
            <p id="footer">Raj Kotak</p> 
            <p id="footer">Mckenna Koetitz</p>
        </div>
    );
}

export default Footer;

   