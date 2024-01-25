import React,{Component} from 'react';
import { Helmet } from 'react-helmet';


import Logo from '../../assets/logo.svg';
import boris from '../../assets/boris-original_1.jpg';

import Aux from "../../hoc/Aux";
import ReactGA from 'react-ga';



import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFormInline,
    MDBAnimation
  } from "mdbreact";


    
class signup extends Component {
    state = {
      posts:[]
  };





    render() {
        // const posts = this.state.posts.map(post =>{
        //     return <p> {post.title}</p>;
        // });

ReactGA.pageview('/signup');


      
      return (
        <div class="text-left">

        <Helmet>
          <title>Get Started</title>
          <meta name="description" content="Sign Up for Bumblebees.io" />
        </Helmet>
        {/* <MDBView> */}
        {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
          <MDBContainer className='pt-4 pb-4 mt-2 mb-2'>
            <MDBRow>
              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="text-center text-md-left col-md-6 mt-xl-5 mt-2 mb-2"
              >
                <div className="dark-grey-text">
                <h1 className="h1-responsive font-weight-bold">
                  Sign up right now!
                </h1>
                <hr className="hr-light" />
                
                {/* <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae, quisquam iste, maiores. Nulla.
                </h6> */}
                <button outline color="grey">
                  Learn More
                </button>
                </div>
              </MDBAnimation>

              <MDBCol md="6" xl="5" className="mb-4">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard id="classic-card" className="dark-grey-text">
                    <MDBCardBody className="amber lighten-3">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Register:
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput
                        
                        label="Your name"
                        icon="user"
                      />
                      <MDBInput
                        
                        label="Your email"
                        icon="envelope"
                      />
                      <MDBInput
                        
                        label="Your password"
                        icon="lock"
                        type="password"
                      />
                      <div className="text-center mt-4 black-text">
                        <button color="indigo">Sign Up</button>
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="twitter"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="linkedin"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="instagram"
                              className="white-text"
                            />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>


            </MDBRow>
          </MDBContainer>
        {/* </MDBMask> */}
      {/* </MDBView> */}
      </div>
        );
      }
    }
    


export default signup;

