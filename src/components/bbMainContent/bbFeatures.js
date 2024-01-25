import React,{Component} from 'react';
import { Helmet } from 'react-helmet';

import classes from './bbMainContent.module.css';
import Logo from '../../assets/logo.svg';
import boris from '../../assets/boris-original_1.jpg';

import Aux from "../../hoc/Aux";
import ReactGA from 'react-ga';



import {

  MDBContainer, MDBRow,MDBCol, MDBJumbotron,MDBCardTitle,MDBBtn,MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardText,
  MDBCardUp
  } from "mdbreact";


    
class features extends Component {
    state = {
      posts:[]
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };



    features_cards(title, description,iconName){
        return(
        <MDBCol className="d-flex justify-content-center text-center py-3">
            <MDBCard className = 'amber lighten-3' style={{ width: "20rem" }}>
                {/* <MDBCardImage className="img-fluid" src={imageurl} waves /> */}
                <MDBIcon icon={iconName} size='5x' className = 'pt-3'/>
                
                <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
                {description}
                </MDBCardText>
                
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    
        );
  }

  features(){
    return(
        <MDBContainer>

            <MDBRow>
                {this.features_cards("JMeter supported",
                'Bumblebees.io is built on JMeter. Start building your scripts using one of the best open source Performance Testing tool JMeter. Plug and play your existing JMeter scripts in bumblebees.io to run your test in large scale',
                'plug')}
            
                {this.features_cards("Simulate Production Load",
                'Generate huge load like your production. Get the Leading Indicator from our comprehensive results. Fix the performance bottleneck issues before it reaches to production.',
                'truck-loading')}


{/* Cloud based solution

 Live reports

 Result comparison

 Network Emulation

 Set Failure criteria */}


                {this.features_cards("Cloud based solution",
                'Implemented in AWS Cloud based solutions provides flexibility to scale up your load on the go. Also let you simulate load from different geography. Generate millions of virtual user load through cloud.  ',
                'cloud-showers-heavy')}

                {this.features_cards("Live Test Results",
                'Get the live test results with our live monitoring solutions.',
                'chart-line')}

                {this.features_cards("Network Emulation",
                'Throttle your application outgoing bandwidth with different Network speed emulations such as GPRS, 3G, 4G, WIFI 802.11a/g, ADSL, 100 Mb Lan, Gigabit Lan. Control your bandwidth.',
                'wifi')}
                
                {this.features_cards("Result Comparison",
                'Benchmark your test results. Compare your tests results from different builds against the benchmarked performance data.',
                'vials')}

{this.features_cards("Protocols supported",
                'Web - HTTP, HTTPS (Java, NodeJS, PHP, ASP.NET, …), SOAP / REST Webservices, FTP, Database via JDBC, LDAP, Message-oriented middleware (MOM) via JMS, Mail - SMTP(S), POP3(S) and IMAP(S), Native commands or shell scripts, TCP, Java Objects',
                'menorah')}


            </MDBRow>
        </MDBContainer>
    );
}


    
    render() {
        // const posts = this.state.posts.map(post =>{
        //     return <p> {post.title}</p>;
        // });
        ReactGA.pageview('/features');



      const navStyle = { marginTop: "4rem" };
      const overlay = (
        <div
          id="sidenav-overlay"
          style={{ backgroundColor: "transparent" }}
          onClick={this.handleTogglerClick}
        />
      );
      return (
        <aux>
        <Helmet>
          <title>Features - Bumblebees.io</title>
          <meta name="description" content="JMeter supported · Simulate Production like load · Cloud based solution · Live Test results · Network emulation · Result Comparison" />
        </Helmet>
        <MDBContainer>
        {this.features()}
        </MDBContainer>
        </aux>

        );
      }
    }
    


export default features;

