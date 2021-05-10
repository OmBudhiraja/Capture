import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {


  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">Capture</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink exact activeClassName="activeClass"  to="/">1. About Us</NavLink>
        </li>
        <li>
          <NavLink  activeClassName="activeClass" to="/work">2. Our Work</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="activeClass" to="/contact">3. Contact Us</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6.5rem;
  background: #282828;
  position: sticky;
  top:0;
  z-index: 20;
  a{
      color: white;
      text-decoration: none;
  }
  ul{
      list-style:none;
      display:flex;
      li{
          padding-left: 5rem; 
          position: relative;
      }
  }
  #logo{
      font-size: 1.7rem;
      font-family: 'Lobster', cursive;
      font-weight: lighter;
  }
  @media screen and (max-width: 750px){
    flex-direction: column;
    padding: 2rem 0rem ;
    ul{
      padding: 2rem 3rem;
      justify-content: space-between;
      width: 100%;
      li{
        padding: 0;
      }
    }
  }
`


export default Nav;
