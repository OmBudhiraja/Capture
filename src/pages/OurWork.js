import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

// importing images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
// animations
import {motion} from 'framer-motion'
import {pageAnimation , fade, photoAnimation, lineAnimation, slider, sliderContainer} from '../animation'
import UseScroll from '../components/UseScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
  const [element, controls] = UseScroll()
  const [element2, controls2] = UseScroll()
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
          </motion.div>
            <Movie>
                <Link to="/work/the-athlete"><motion.h2 variants={fade}>The Athlete</motion.h2 ></Link>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                  <Hide> <motion.img variants={photoAnimation} src={athlete} alt="athlete"/> </Hide> 
                </Link>
            </Movie>
            <Movie variants={fade} ref={element} animate={controls} initial="hidden" >
                <Link to="/work/the-racer"><motion.h2 variants={fade}>The Racer</motion.h2 ></Link>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                <Hide>  <motion.img variants={photoAnimation} src={theracer} alt="theracer"/> </Hide> 
                </Link>
            </Movie>
            <Movie variants={fade} ref={element2} animate={controls2} initial="hidden" >
                <Link to="/work/good-times"><motion.h2 variants={fade}>Good Times</motion.h2 ></Link>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                <Hide>  <motion.img variants={photoAnimation} src={goodtimes} alt="goodtimes"/> </Hide> 
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 6.5rem;
  a{
    text-decoration: none;
    color: whitesmoke;
  }
  h2{
      padding: 1rem 0rem;
  }
  @media screen and (max-width: 800px){
    padding: 3rem
  }
`
const Movie = styled(motion.div)`
  padding-bottom: 6rem;
  .line{
    background: #a39f9f;
    height: 0.5rem;
    margin-bottom: 3rem;
  }
  img{
      width:100%; 
      height: 70vh;
      object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
 background: #ff8efb;
`

const Frame3 = styled(Frame1)`
 background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
 background: #8effa0;
`


export default OurWork
