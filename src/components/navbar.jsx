import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Total
                    <span className="badge badge-pill badge-secondary m-2">
                        {this.props.counters.reduce((a,b) => {
	                        let c = b.value;
	                        return c + a;
                        }, 0)}
                    </span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;