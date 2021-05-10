import React from 'react'
import styled from "styled-components";
import {About} from '../Styles'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import UseScroll from './UseScroll'
import {fade} from '../animation.js'


const FaqSection = () => {

    const [element, controls] = UseScroll()

    return (
        <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do I start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel.</p>
                </div>   
            </Toggle>
            <Toggle title="Daily Schdule">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel.</p>
                </div>
            </Toggle>
            <Toggle title="Different Payment Methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel.</p>
                </div>
            </Toggle>
            <Toggle title="What products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
 display: block;
 span{
     display: block;
 }
 h2{
     padding-bottom: 2rem;
     font-weight: lighter;
 }
 .faq-line{
     width:100%;
     height: 0.2rem;
     margin: 2rem 0rem;
     background: #a39f9f;
 }
 .question{
     cursor:pointer;
     padding:2rem 0rem
 }
 .answer{
     padding: 2rem 0rem 0rem;
     p{
         padding:1rem 0rem;
     }
 }
`

export default FaqSection
