import React from "react";

class Header extends React.Component{
    render(){
        return(
            
            <header className="App-header">        
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {this.props.linkText}
                </a>
        </header>
        )
    }
}

export default Header