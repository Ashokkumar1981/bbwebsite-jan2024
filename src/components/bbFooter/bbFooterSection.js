import React, { Component } from "react";
import Logo from '../../assets/logo.svg';




import {
MDBContainer,MDBFooter,MDBRow,MDBCol
    } from "mdbreact";

class footersection extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
        return (
        <MDBFooter className="font-small amber lighten-2 dark-grey-text pt-2 mt-0">
            <MDBContainer  className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="3">
                    <img src={Logo}  height="20" alt="logo" />
                    <p>
                    Simple and Powerful
                    </p>
                </MDBCol>
                <MDBCol md="9" >
                    <p class="sitemap">
        
        
                        <ul className='mb-0'>
                        <li className="list-unstyled">
                            <a className ='dark-grey-text' href="/">Home</a>
                        </li>
                        <li className="list-unstyled">
                            <a className ='dark-grey-text' href="/features">Features</a>
                        </li>
                        <li className="list-unstyled">
                            <a className ='dark-grey-text' href="/pricing">Pricing</a>
                        </li>
                        <li className="list-unstyled">
                            <a className ='dark-grey-text' href="/demorequest">Demo Request</a>
                        </li>
                        <li className="list-unstyled">
                            <a className ='dark-grey-text' href="/login">Login</a>
                        </li>
                        </ul>
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://bumblebees.io">Bumblebees.io</a>
                
                </MDBContainer>
            </div>
        </MDBFooter>
        );
      }
    }
    


export default footersection;
