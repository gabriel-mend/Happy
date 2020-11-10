import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #fff;
        background: #ebf2f5;
    }

    body, input, button, textarea {
        font: 600 18px Nunito, sans-serif;
    }

    :root {
        --color-primary: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);;
        --color-secondary: #FFD666;
        --color-tertiary: #CEDEE5;
        --color-quaternary: #F5F8FA;
        --color-subtitle: #4D6F80;
        --color-text-input: #5C8599;
        --color-text-label: #8FA7B3;
        --color-background: #37C77F;
        --color-border: #D3E2E5;
        
    }
`

export default GlobalStyles;