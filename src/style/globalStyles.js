import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  /* dark shades of primary color*/
  --clr-primary-1: #2c0055;
  --clr-primary-2: hsl(21, 84%, 25%);
 
  --ff-primary: "Sacramento", cursive;
  --transition: all 0.3s ease-in-out;

 
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    
  overflow: hidden;
  background: linear-gradient(180deg, #1c0138 0%, #2c0055 100%);
  height: 100vh;
  
  }
  span,h1{
    background: -webkit-linear-gradient(#ffdc2a, #fb2182);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyle;
