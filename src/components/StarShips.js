import { Component } from "react"
import React from 'react'
import ApiStarShips from "./ApiStarShips";
import CardShips from "./ShipCards";
import { StyledStarShips } from "./styles/StarShips.styled";

class StarShipsStar extends Component {

    state = {
        starships:[]
    }

    constructor (){
        super();
        ApiStarShips.get('/').then( res => {            
            this.setState({starships: res.data.results})
        })
    }

    render () {
        return (
            <>
                <h1 className='galaxy'>StarShips</h1>
                <StyledStarShips>
                    
                    {this.state.starships.map(ship => <CardShips key={ship.id} ship={ship}/>)}
                    
                </StyledStarShips>
            </>
        )
    }
    
}

export default StarShipsStar;
