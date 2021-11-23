import { useState } from "react";
import { CardsWars } from "./styles/Cards.styled";

export default function CardShips ({ ship: { name,model, length, passengers} }) {

    return (

        <CardsWars>
            <div  >
                <h1>{name}</h1>                
            </div>

            <div>
                <img src={`./images/${name}.png`} alt='' />
            </div>
            
            <div >
                <h3>Model: <strong>{model}</strong></h3>
                <h3>Length: <strong>{length}</strong></h3>
                <h3>Passengers: <strong>{passengers}</strong></h3>
                
                
            </div>

        </CardsWars>

    )
}