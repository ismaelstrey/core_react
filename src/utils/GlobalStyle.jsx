import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #2612db;
  --default-color: #e9e9e9;
  --white-color: #e0e0e0;
  --logo-color: #0ae6ff;
  --secondary-color: #79ebeb;
  --warning-color: #d3ae34;
  --sucess-color: #55ec1a;
  --danger-color: #db3a3a;
  --dark-bg-color: brown;
  --dark-color: #213547;
  --dark-text-color: #e9e9e9;
  --white-text-color: #1a1919;
  --main-nav-color: #1f1d1d;
  --main-bg-color: #242424;
  --main-text-color: #111111;  
}
*{
  margin: 0;
  padding: 0;
}
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    color: var(--default-color);
    background-color: var(--main-bg-color);
  }
`