import React, { Component } from "react";

import classes from './bbToolbar.module.css';
import Logo from '../../../assets/logo.svg';
import axios from 'axios';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
 MDBContainer,MDBView,MDBMask, MDBRow, MDBCol, MDBBtn,MDBIcon
    } from "mdbreact";
import { NavLink } from "react-router-dom";

    
    
class toolbar extends Component {
    state = {
      navbarItems: [
        {id:'11', route: '/', fontClass: 'fas fa-home', name: 'Home', active: 'active'},
        {id:'12', route: '/features', fontClass: 'fab fa-forumbee', name: 'Features',active:''},
        {id:'13', route: '/pricing', fontClass: 'fas fa-dollar-sign',name:'Pricing',active:''},
        {id:'14', route: '/demorequest', fontClass: 'fas fa-chalkboard-teacher',name:'Demo Request',active:''},
        {id:'15', route: '/login', fontClass: 'fas fa-sign-in-alt',name:'Login',active:''},
        {id:'16', route: '/signup', fontClass: 'fas fa-user-plus',name:'Get Started',active:''},

    ],
    posts:[],
    collapseID:'',
    isOpen:false  


  };


    
  // navbarSelectHandler = () => {
  //   this.setState({
  //       currentNavbarItem: this.addClass('active').siblings().removeClass('active')
        
  //     }
  //   )
  //   console.log('called navbarSelectHandler');
  // }


  // toggleCollapse = collapseID => () =>
  // {
  //     console.log('calling togglecollapse' + collapseID);
  //     this.setState(prevState => ({
  //     collapseID: (prevState.collapseID !== collapseID ? collapseID : '')
      
  // }))};


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
  
    componentDidMount(){
        // axios.get("/posts")
        //     .then(response =>{
        //         this.setState({posts:response.data});
        //         console.log(response);
        //     });
    }

    activeNavbar = name =>() =>
    {
      const mynavbaritems = this.state.navbarItems;
      mynavbaritems.map(item=>{
        if(item.name == name){
          item.active = 'active';

        }
        else
        item.active ='';
      }

      );
      
      console.log('ashok calling' + mynavbaritems);
      this.setState(
        {navbaritems:mynavbaritems,
          isOpen:false
        }
      );
      

    }

    
    render() {
        const posts = this.state.posts.map(post =>{
            return <p> {post.title}</p>;
        });


        const getnavbaritems = this.state.navbarItems.map(navbaritem=>{
          console.log("navbaritems called" );
          return (

              <MDBNavItem key = {navbaritem.id} className={navbaritem.active} onClick={this.activeNavbar(navbaritem.name)} >
                  <NavLink  to={navbaritem.route} style={{color: '#705800', textDecoration: 'none'}}>
                  <i className={navbaritem.fontClass}/> {navbaritem.name}</NavLink>
              </MDBNavItem>
      
          );
        });

      const navStyle = { marginTop: "4rem" };
      // const overlay = (
      //   <div
      //     id="sidenav-overlay"
      //     style={{ backgroundColor: "transparent" }}
      //     onClick={this.handleTogglerClick}
      //   />
      // );
      return (
        
        // <div> </div>

          <MDBNavbar className="amber lighten-2 color-block-5 mx-auto z-depth-1 sticky-top" light expand="md">
          <MDBContainer className="sticky-top">
            {/* <MDBNavbarBrand href="/"> */}

              <img src={Logo}  height="40" alt="logo"  />

            {/* </MDBNavbarBrand> */}
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            

        
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right >
               
                {getnavbaritems}

            </MDBNavbarNav>
              
            </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
 


        );
      }
    }
    


export default toolbar;

