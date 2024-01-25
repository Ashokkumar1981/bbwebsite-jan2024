import React,{Component} from 'react';

import classes from './bbMainContent.module.css';
import Logo from '../../assets/logo.svg';
// import boris from '../../assets/boris-original_1.jpg';
import boris from '../../assets/yellow-flower2.jpg';
import Laptop from '../../assets/Feature_Laptop2.jpg';
import Aux from "../../hoc/Aux";
import ReactGA from 'react-ga';





import {

  MDBContainer, MDBRow,MDBCol, MDBJumbotron,MDBCardTitle,MDBBtn,MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardText,MDBAnimation,MDBCardUp
  } from "mdbreact";




class maincontentsection extends Component {




  state = {
    isOpen: false
  };
  // 0 0 30px #FFFF99,0 0 40px #FFFF99,0 0 40px #FFFF99,0 0 40px #FFFF99
    styles1 = { textShadow: `0 0 2px #FFFF99, 0 0 2px #FFFF99,0 0 5px #ffcc00,0 0 10px #ffcc00,0 0 30px #ffcc00,0 0 40px #ffcc00,0 0 50px #ffcc00,0 0 60px #ffcc00,0 0 70px #ffcc00`};
    // 0 0 10px #FFFF99, 0 0 20px #FFFF99, 0 0 30px #FFFF99, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073
  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  
  introduction(){
    
    
    return(


        <MDBContainer fluid>

          <MDBRow>
            <MDBCol className="px-0">
              <MDBJumbotron  style={{ padding: 0 }}>

                <MDBCard  className="font-weight-normal text-center my-0 img-fluid transparent" style={{ backgroundImage: `url(${boris})`,backgroundSize: `cover`}}>
                  {/* <MDBMask className="flex-center py-5 px-1" pattern={0} overlay="stylish-light" > */}

                    <MDBCol className="py-5" >
                    <MDBCardTitle className="h1-responsive pt-3 m-5" style={this.styles1}> <h1>Do you want to make your application perform better?</h1></MDBCardTitle>
                    <h2 className="mx-5 mb-1" style={this.styles1}>Let us introduce our New Age Performance Testing tools</h2>
                    <img src={Logo} height="60" alt="logo" style={
                      {
                      WebkitFilter: `drop-shadow(2px 2px 2px #FFFF99)`,
                      filter: `drop-shadow(2px 2px 1px #FFFF99)`
                      

                      }
                     
                    } />
                    <h5 className="mx-5 mb-5" style={this.styles1}>developed by bunch of Awesome Developers.</h5>

                    <button outline color="white" className="font-weight-bold" href="/signup"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Let's Get Started</button>
                  </MDBCol>
                  {/* </MDBMask> */}
                </MDBCard>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>


    );
  }

  quicksentence(title, description){
    const styles2 = {backgroundImage: `linear-gradient(180deg, #fff9cf, #fff7bf)`};
  
    return(
        <Aux>
    
            <MDBContainer fluid className='text-center dark-grey-text pt-2 pb-2 mt-2 mb-2'>
                <h2>{title}</h2>
                <p className="sub-text">{description}</p>
            </MDBContainer>

        </Aux>
    );
  }

  
    advantages_cards(title, description,iconName){
        return(
        <MDBCol className="d-flex justify-content-center text-center dark-grey-text py-3">
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

  advantages1(){
    return(
        <MDBContainer>

            <MDBRow>
                {this.advantages_cards("Start Simple",
                "Bumblebees.io uses JMeter scripts to run the test. Its a modern and intuitive web UI can be used with 'No coding knowledge required'. Use your existing JMeter scripts in Bumblebees to run tests. It is a proven, powerful and easy-to-use load and stress testing solution for optimizing the performance of business applications.",
                "hourglass-start")}
            
                {this.advantages_cards("Save Money",
                "Bumblebees.io uses AWS cloud to generate load. You don't need to spend time and energy in Infrastructure setup. Our implementation is so effective that you can save lot of money compared to any legacy tools.",
                "hand-holding-usd")}

                {this.advantages_cards("Run Continuous Performance Testing from anywhere",
                "Its distributed. You can access bumblebees.io from anywhere and run your Continuous Performance tests. Its totally secured.",
                "running")}



            </MDBRow>
        </MDBContainer>
    );
}

advantages2(){
  return(
      <MDBContainer>

          <MDBRow>
              {this.advantages_cards("Shift Left approach",
              "With Shift Left approach, developer can start running performance tests in early stage of Agile SDLC and ensure the better performing code for every build. It is developer friendly load testing solution which can be used in any stage of",
              "hand-point-left")}
          
              {this.advantages_cards("Identify bottleneck during Run-time",
              "Our live reports helps you to identify the bottle specific to a transaction during run-time",
              "bug")}

              {this.advantages_cards("Run same test in different environment",
              "Use the same test to run in different environment to ensure that your code performs as per SLA",
              "cubes")}



          </MDBRow>
      </MDBContainer>
  );
}

each_feature (feature_details){

    return(
        <div>
        
        <h4 className='font-weight-normal'>   &nbsp;  <MDBIcon icon="arrow-circle-right"/> &emsp; {feature_details}</h4>
        <p></p>
        
        </div>
    );

}
key_features(){
    return(
      
        <MDBContainer fluid className = 'dark-grey-text  text-center amber lighten-3 px-0 mt-3'>
          <MDBCard className="text-center img-fluid" style={{ backgroundImage: `url(${Laptop})`,backgroundSize: `cover`}}>
          <MDBContainer  className = 'text-left pt-4 pb-4 mt-2 mb-2'>
          
        <MDBRow >
          

        <MDBCol  md="6" xl="5" className="mb-4">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard id="classic-card" className='pt-2 pb-2 px-2' style={{backgroundColor: `rgba(255, 224, 130, 0.7)`}}>

            <h1 className='font-weight-bold'>Features </h1>
        {this.each_feature ("Apache JMeter\u2122 support")}
        {this.each_feature ("Cloud based solution")}
        {this.each_feature ("Live reports")}
        {this.each_feature ("Result comparison")}
        {this.each_feature ("Network Emulation")}
        {this.each_feature ("Set Failure criteria")}
        {this.each_feature ("Schedule your test to run regularly")}
        {this.each_feature ("Share test results")}
        </MDBCard>
        </MDBAnimation>

        </MDBCol>
        
        </MDBRow>
        
        </MDBContainer>
        </MDBCard>
        </MDBContainer>
    );
}

give_it_a_try(){
    return(
        <Aux>

            <MDBRow className =  'text-center pt-4 pb-4 mt-2 mb-2'>
                <MDBCol>
                <h1>Give it a try</h1>
                <button className = 'amber lighten-1' href="/signup">Ask for Demo</button>
                </MDBCol>
                
            </MDBRow>

        </Aux>
    );

}

render() {
    const styles1 = {textShadow: `2px 0px 5px #FFFF99`};
    
    ReactGA.pageview('Home Page');

    return (
        <Aux>
            {this.introduction()}
            {this.quicksentence("A Simplified Ingenious Performance Testing Tool", "Bumblebees.io is simple and ready to use performance testing tool that enables developers build high performing web applications")}
            {this.advantages1()}
            {this.quicksentence("Do Persistent Performance Testing", "Run your performance tests continuously to ensure that your new code is not breaking your existing application performance")}
{this.advantages2()}
            {this.key_features()}
            {this.give_it_a_try()}
        </Aux>
      
      );
    }
  }
  
export default maincontentsection;






