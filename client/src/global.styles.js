import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body{
    font-family: 'Yeon Sung';
    padding: 20px 40px;
    font-size: large;
    
    @media screen and (max-width: 800px){
      padding: 10px;
    }
   }

   a{
    text-decoration: none;
    color: black;
    }

   *{
    box-sizing: border-box;/*to make buttons align with form*/
    }
`;