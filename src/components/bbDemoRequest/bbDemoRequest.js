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


    
class demorequest extends Component {
    state = {
      posts:[]
  };


    render() {
        // const posts = this.state.posts.map(post =>{
        //     return <p> {post.title}</p>;
        // });

        ReactGA.pageview('/demorequest');
        



      
      return (
        <div class="text-left" >
        <Helmet>
          <title>Demo Request</title>
          <meta name="description" content="Request a demo for Bumblebees.io" />
        </Helmet>

        {/* <MDBView> */}
          
            <MDBContainer className='pt-4 pb-4 mt-2 mb-2'>
              <MDBRow>
                <div className="dark-grey-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold">Request your demo</h1>
                  <hr className="hr-light" />
                  <h5 className="mb-4">
                    Provide us your Name, E-Mail and simple description of your requirement. We will contact you.
                  </h5>
                  
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard className="dark-grey-text">
                    <MDBCardBody className="z-depth-2 amber lighten-3">
                      <h3 className="dark-grey-text text-center">
                        <strong>Write to us:</strong>
                      </h3>
                      <hr />
                      <MDBInput label="Your name" icon="user" />
                      <MDBInput label="Your email" icon="envelope" />
                      <MDBInput
                        label="Your message"
                        icon="pencil-alt"
                        type="textarea"
                        rows="3"
                      />
                      <div className="text-center mt-3 black-text">
                        <button color="indigo">Demo Request</button>
                        
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            
        {/* </MDBView> */}
      </div>
        );
      }
    }
    


export default demorequest;
















