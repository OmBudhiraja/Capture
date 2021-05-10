import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import {MovieState} from '../movieState'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const MovieDetail = () => {
    const history = useHistory()
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState())
    const [movie, setMovie] = useState(null)

    //useEffect
    useEffect(()=>{
       const currentMovie = movies.find(stateMovie=> stateMovie.url === url)
       setMovie(currentMovie)
    }, [movies, url])

    return (
      <>  
       {movie ?  (
            <Detail variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie"/>
                </Headline>
                <Awards>
                    <h2>Awards</h2>
                    <div>{
                        movie.awards.map(award=> (<Award title={award.title} description={award.description} key={award.title} />))
                    }</div> 
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie"/>
                </ImageDisplay>
            </Detail>
       ) : ( <ErrorPage >404! Page not found</ErrorPage>)}
      </>  
    )
}

const Detail = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2{
      position: absolute;
      top:8%;
      left:50%;
      transform: translateX(-50%);
      text-decoration: underline;
  }
  img{
      height: 70vh;
      width: 100%;
      object-fit: cover;
  }
`;

const Awards = styled.div`
   min-height: 80vh;
   margin: 5rem 6.5rem;
   @media screen and (max-width: 900px){
      margin: 3rem
    }
   h2{
       text-align: center;
       margin-bottom: 13vh;
   }
   div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 900px){
      flex-direction: column; */
    }
    div{
        display: block; 
        @media screen and (max-width: 900px){
            display: flex;
        }
    }
   }
`;

const AwardStyled = styled.div`
  margin: 3rem;
  text-align: center;
  h3{
      font-size: 2rem;
  }
  .line{
      width: 100%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0rem;
  }
  p{
      padding: 2rem 0rem
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  margin: auto;
  img{
    height: 100vh;
    width:100%;
    object-fit: cover;
 
  }
`

const ErrorPage = styled.h1`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  color: white;
  font-size: 3rem;
`

//award components
const Award = ({title, description})=>{
    return (
        <AwardStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyled>
    )
}


export default MovieDetail
