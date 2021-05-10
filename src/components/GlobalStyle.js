import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media screen and (max-width: 800px){
        font-size: 75%;
    }
    
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Lobster', cursive; */
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background: whitesmoke;
        border: 3px solid whitesmoke ;
        color: black;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 1.8rem;
}

a{
   font-size: 1.1rem
}

span{
    font-weight: bold;
    color: #23d997;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem
}

.activeClass{
    position: relative;
    &::after{
        content: "";
        height: 0.3rem;
        width:90%;
        position: absolute;
        background: #23d997;
        bottom: -0.7rem;
        left: 55%;
        transform: translateX(-50%);
    }
  }

`

export default GlobalStyle