import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div class="col-6 col-sm-3 col-md-2 align-self-center">
                                <img src="images/tree-icon.PNG" class="img-fluid" height="600" width="600" />
                            </div>
                            <div className="col">
                                <h1>Money Trees</h1>
                                <h2>...bringing your brainchild to life with crowdfunding</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">
                            <span> Home </span>
                            <span> Explore Campaigns </span>
                            <span> Contact Us </span>     
                        </NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;