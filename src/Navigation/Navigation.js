import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";





class Navigation extends Component {
    constructor(props) {
        super();
       
    }

    




    render() {       

        return (
            <div className="navigation">
                
                <div className="container">

                    <ul>
                    <li> <NavLink exact activeClassName="active"  to={'PnrStatus'}>Home</NavLink>  </li>
                    <li> <NavLink activeClassName="active" to={'B'}>about</NavLink>  </li>
                    <li> <NavLink activeClassName="active" to={'C'}>contact</NavLink>  </li>
                    </ul>
                
                    
                </div>
            </div>
        )
    }
}

export default Navigation;
