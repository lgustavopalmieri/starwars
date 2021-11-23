import { useState } from "react";
import { CardsWars } from "./styles/Cards.styled";

export default function CardPilots ({ pilot: {name, birth_year, height,mass} }){

    return (

        <CardsWars>
            <div >
                <h1>{name}</h1>
            </div>

            <div>
                <img src={`./images/${name}.png`} alt='' />
            </div>
            
            <div >
                <h3>Birth: <strong>{birth_year}</strong></h3>
                <h3>Height: <strong>{height}</strong></h3>
                <h3>Mass: <strong>{mass}</strong></h3>
                
                
            </div>
        </CardsWars>
    )
}