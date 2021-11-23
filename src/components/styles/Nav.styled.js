import styled from "styled-components";

export const NavStyled = styled.nav `

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap');

    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    width: 100%;
    padding: 10px 0px;
    font-family: 'Quicksand', sans-serif;
    
    
    


    img {
        width: 40px;
        height: 40px;
        transition:  0.4s;
        cursor:pointer;

        &: hover {
            transform: scale(0.90);
            color: #F56F36;
        }
        
        
      }

    & > div{
        color: #F56F36;
        font-weight: 600;
        

        

        .button-nav{
            cursor: pointer;
            transition:  0.4s;
            margin-left: 20px;
            background-color: #F56F36;
            padding: 15px 15px;
            border: none;
            border-radius: 10px;
            box-shadow: none;
            color: #EEEEEE;

            &: hover {
                transform: scale(0.95);
                color: #1F2738;
                background-color: #F56F36;
            }
        }

        
    }

    @media (max-width: 480px) {

        img {
            
            padding: 10px;
            
          }
        
        & > div{
            font-weight: 600;
            padding: 10px;
    
            
        }
        
    }

`