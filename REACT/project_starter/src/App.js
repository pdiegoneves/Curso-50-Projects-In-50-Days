import './App.css'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Project Starter</h1>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;

}

body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
`

export default App
