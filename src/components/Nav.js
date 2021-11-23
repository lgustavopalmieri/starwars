import React from 'react'
import { NavStyled } from './styles/Nav.styled'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <NavStyled>

            <Link to="/"> <img src={`./images/icon.png`} alt=''/> </Link>

            <div>
                
                <Link to="StarShips"><button className='button-nav'>StarShips</button></Link>
                <Link to="Pilots"><button className='button-nav'>Pilots</button></Link>
                
                
            </div>
        </NavStyled>
    )
}
