import React,{Component} from 'react';

import { Navbar, NavbarBrand, Nav,  Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{
    constructor(props) {
        super(props);
    
       
        this.state = {
         
        };

        
      }

      
      
      


    render(){

        
        return (
              
            <React.Fragment>
                <Navbar dark className="nav">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/"> Filmi-Pedia</NavbarBrand>
                    
                  </div>
                </Navbar>
                <Jumbotron >
                <div className="Container jum">
                    <div className="row ">
                          <div class="col-12 sm-6">
                          <h1>Filmi-Pedia </h1>
                          <img src={require('../assets/logo.png')} height="50" width="50"></img>
                          <p> You get all movie details here!!</p> 
                          </div>
                    </div>
                </div>
                </Jumbotron>
                </React.Fragment>
        );
    }
}

export default Header;