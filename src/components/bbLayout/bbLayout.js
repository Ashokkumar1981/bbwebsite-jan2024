import React from 'react';
import Aux from "../../hoc/Aux";
import classes from './bbLayout.module.css';
import Logo from '../../assets/logo.svg';
import HeaderSection from '../bbHeader/bbHeaderSection';
import Toolbar from '../bbNavigation/bbToolbar/bbToolbar';
import boris from '../../assets/boris-original_1.jpg';
import MainContent from '../bbMainContent/bbMainContent';
import Features from '../bbMainContent/bbFeatures';
import FooterSection from '../bbFooter/bbFooterSection';
import Signup from '../bbSignup/bbSignup';
import Login from '../bbLogin/bbLogin';
import DemoRequest from '../bbDemoRequest/bbDemoRequest';
import { Routes, Route } from 'react-router-dom';


import {
    MDBMask,MDBView
    } from "mdbreact";



const layout = (props) => (
    <Aux>
        <div className='' style={{backgroundImage: `linear-gradient(180deg, #fff4c7, #ffe373)`}}>      
        <HeaderSection />    
        
        
        <Routes>


            {/* <Route path="/" exact component={MainContent} /> */}

            <Route path="/" element={<MainContent />}/>

            {/* <Route path="/features"  component={Features} /> */}
            <Route path="/features" element={<Features />}/>

            {/* <Route path="/pricing"  render={() => <h1>Pricing</h1>} /> */}
            <Route path="/pricing" element={<h1>Pricing</h1>}/>

            <Route path="/demorequest" element={<DemoRequest/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        {/* <MainContent/>
        <Features/> */}

        <FooterSection />
        

        </div>

    </Aux>
);

export default layout;

