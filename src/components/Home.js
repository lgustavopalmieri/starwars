import React from 'react'
import { HomeStyled } from './styles/home.styled'
import { InfoCards } from './Infos.styled'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='galaxy'>In a Galaxy far, far away ...</h1>
            <HomeStyled>              
                
                <InfoCards>    
                    <h2 className='shipname'>TIE Advanced x1</h2>
                    <p>The TIE Advanced x1, or TIE/ad, was an advanced prototype starfighter that was part of the TIE line manufactured by Sienar Fleet Systems. </p>
                    <img src={`./images/TIE Advanced x1.png`} alt='' />
                    <Link to="StarShips"><button className='homeButton'>Click to see more StarShips</button></Link>
                </InfoCards>

                <InfoCards>
                    <h2 className='char'>Leia Organa</h2>
                    <p>Leia Skywalker Organa Solo was a Force-sensitive human female political and military leader who served in the Alliance to Restore the Republic.</p>
                    <img src={`./images/Leia Organa.png`} alt='' />
                    <Link to="Pilots"><button className='homeButton'>Click to see more Pilots</button></Link>
                </InfoCards>

                
                
            </HomeStyled>
        </>    
    )
}

export default Home
