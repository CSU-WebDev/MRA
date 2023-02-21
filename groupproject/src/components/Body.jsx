import React from "react";

class Body extends React.Component{
    render(){
        return(
            
            <body className="App-body">
                    <form action="/action_page.php">
                    <label for="city">City: </label>
                    <input type="text" id="city" name="city"></input>
                    <button type="submit" value="Submit"></button>
                    </form>

            </body>
        )
    }
}

export default Body