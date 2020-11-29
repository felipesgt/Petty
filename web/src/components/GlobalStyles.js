import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle `
    * {
      box-sizing: border-box;
    }
    html,
    body
    {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%;
      min-height: 0;
      max-height: 100%;
      overflow: hidden;
    }
    body {
      font-size: 1.6rem;
    }
`
export default GlobalStyles
    