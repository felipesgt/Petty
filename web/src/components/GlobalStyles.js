import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
    * {
      box-sizing: border-box;
    }
    html,
    body
    {
      margin: 0;
      font-family: 'Comfortaa', cursive;
      font-size: 62.5%;
      line-height: 1.5;
      color: #212529;
      text-align: left;
      min-height: 0;
      max-height: 100%;
      overflow: hidden;
    }
    body {
      font-size: 1.6rem;
    }
`
export default GlobalStyles
    