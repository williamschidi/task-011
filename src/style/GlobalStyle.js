import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: inter;
    
}
 
`;

export default GlobalStyle;
