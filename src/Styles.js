import styled from "styled-components";
import {motion} from 'framer-motion'


export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 6.5rem;
  color: whitesmoke;
  @media screen and (max-width: 800px){
        display:block;
        padding: 2rem;
        text-align: center;
    }
`;

export const Description = styled.div`
  flex: 5;
  z-index: 10;
  padding-right: 5rem;
  h2{
      font-weight: lighter;
  }
  @media screen and (max-width: 800px){
        padding: 0rem;
        button{
          margin: 2rem 0rem 5rem;
        }
    }
`;

export const Image = styled.div`
   z-index: 10;
   flex:4;
   overflow: hidden;
   img{
       width:100%;
       height :70vh;
       object-fit: cover;
   }
`;

export const Hide = styled.div`
  overflow: hidden;
`
