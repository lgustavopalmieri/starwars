import styled from "styled-components";

export const InfoCards = styled.div `

    display:flex;
    flex-direction:column;
    max-width: 400px;
    padding: 20px 0px;
    justify-content:space-between;
    height:650px;
    

    .homeButton {
        padding:10px;
        margin-top: 10px;
        border-radius: 10px;
        width: 100%;
        background-color:#EEEEEE;
        box-shadow: none;
        font-size:1.1em;
        border: none;
        color: #1F2738;
        font-weight: bold;
        cursor:pointer;
        transition:  0.4s;
        
        
        &: hover {
            transform: scale(0.98);
            color:#EEEEEE;
            background-color: #F56F36;
        }
    }

    

    & > p{
        font-weight:300;
        color:#EEEEEE;
        margin-top: 40px;
        text-align: justify;
        text-justify: inter-word ;
    }

    & > img {
        margin-top:20px;
        
    }

    @media(max-width:740px){

        max-width: 90%;
    } 

`