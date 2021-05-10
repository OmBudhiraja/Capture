import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from "styled-components";
import {About, Description, Image} from '../Styles'
import UseScroll from './UseScroll'
import {fade} from '../animation.js'


const ServicesSection = () => {
    const [element, controls] = UseScroll()
    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>High <span>quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork icon"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
  h2{
      padding-bottom: 3rem;
  }
  p{
      width: 70%;
      padding: 2rem 0rem 4rem;
  }

`
const Cards = styled.div`
  display:flex;
  flex-wrap: wrap; 
  @media screen and (max-width: 800px){
      justify-content: center;
  }
`

const Card = styled.div`
 flex-basis: 16.8rem;
  .icon{
    display:flex;
    align-items:center;
    h3{
        margin-left: 0.7rem;
        background: whitesmoke;
        color: #181616;
        padding:10px;
    }
  }
`

export default ServicesSection
