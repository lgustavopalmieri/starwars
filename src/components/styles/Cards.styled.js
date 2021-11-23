import styled from "styled-components";

export const CardsWars = styled.div `
    

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    width: 350px;
    height: 500px;
    font-size: 0.8em;
    padding-top:20px;
    padding-bottom:20px;
    margin-bottom: 40px;
    
    
    
    backdrop-filter: blur(6px) saturate(200%);
    -webkit-backdrop-filter: blur(6px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 12px;
    border: 3px solid rgba(209, 213, 219, 0.3);

    cursor:pointer;
    transition:  0.4s;
        
        
        &: hover {
            transform: scale(0.98);
            color:#EEEEEE;
            
            background: rgba(238, 238, 238, 0.5)
        }

             
`