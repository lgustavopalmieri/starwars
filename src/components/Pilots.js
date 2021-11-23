import { Component } from "react";
import React from "react";
import ApiPilots from "./ApiPilots";
import { PilotsStyled } from "./styles/Pilots.styled";
import CardPilots from "./PilotsCards";
class PilotsStar extends Component {

    state ={
        pilots:[]
    }

    constructor () {
        super();
        ApiPilots.get('/').then(res => {
            this.setState({pilots: res.data.results})
        })
    }

    render () {
        return (
            <>
                <h1 className='galaxy'>Pilots</h1>
                <PilotsStyled>
                    {this.state.pilots.map(pilot => <CardPilots key={pilot.id} pilot={pilot}/>)}
                </PilotsStyled>
            </>
        )
    }
}

export default PilotsStar;