import React from 'react'
// animations
import {motion} from 'framer-motion'
import {pageAnimation, titleAnimation} from '../animation'
import styled from 'styled-components'


const ContactUs = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
           <Title>
               <Hide>
                   <motion.h2 variants={titleAnimation}>Get in Touch with Us.</motion.h2>
               </Hide>
           </Title>
           <div>
               <Hide>
               <Social variants={titleAnimation}>
                   <Circle />
                   <h3>Send us a message</h3>
               </Social>
               </Hide>
               <Hide>
               <Social variants={titleAnimation}>
                   <Circle />
                   <h3>Send an Email</h3>
               </Social>
               </Hide>
               <Hide>
               <Social variants={titleAnimation}>
                   <Circle />
                   <h3>Social Media</h3>
               </Social>
               </Hide>
           </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
  padding: 4rem 6.5rem;
  min-height: 90vh;
  color: whitesmoke;
  @media screen and (max-width: 800px){
    padding: 4rem;
    min-height: 70ch;
  }
`

const Title = styled.div`
  margin-bottom: 4rem;
`

const Hide = styled.div`
  overflow: hidden;
`

const Circle = styled.div`
  border-radius: 50%;
  width:2rem ;
  height: 2rem;
  background: whitesmoke;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3{
      margin: 2rem;
      font-size: 2rem;
  }
`

export default ContactUs
