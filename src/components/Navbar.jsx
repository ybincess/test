import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends Component 
{
    state ={

    };

    // styles ={
    // fontSize: 20,
    // fontWeight: "bold"
    // };
    render() {
        return (
            <header 
            style={{fontSize: 20,color: "blue"}}
            className="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar">
            <h1>You!</h1>
            <div class="mr-auto" >
                <ul class="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a   style={{fontSize: 15,fontWeight: "bold",color: "blue"}}
                                className="nav-link " href="/"
                                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">
                                Courses</a>
                        </li>
                        <li className="nav-item">
                            <a  style={{fontSize: 15,fontWeight: "bold",color: "blue"}} 
                            className="nav-link active" href="/docs/4.0/getting-started/introduction/"
                                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">
                                Trainings</a>
                        </li>
                        <li className="nav-item">
                            <a style={{fontSize: 15,fontWeight: "bold",color: "blue"}} 
                                className="nav-link " href="/docs/4.0/examples/"
                                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">
                                Registration</a>
                        </li>

                        <li className="nav-item">
                            <a style={{fontSize: 15,fontWeight: "bold",color: "blue"}}
                               className="nav-link" href="https://expo.getbootstrap.com/"
                               onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');" target="_blank"
                               rel="noopener">Contact US</a>
                        </li>
                    </ul>

                </div>

                <div class="d-flex justify-content-end">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item-divider navbar-dark navbar-right"></li>
                        <li className="nav-item">
                        <a style={{fontSize: 15,fontWeight: "bold",color: "blue"}}
                        className="nav-link" 
                        href="https://themes.getbootstrap.com/signin/">Sign in</a>
                        </li>
                        <li className="nav-item">
                        <a style={{fontSize: 15,fontWeight: "bold",color: "blue"}}
                        className="nav-link" 
                        href="https://themes.getbootstrap.com/my-account/">Sign up</a></li>
                    </ul>
            </div>
            </header>
        
        
        );
    }
}
 
export default Navbar;