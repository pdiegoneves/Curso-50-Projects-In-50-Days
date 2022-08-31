import './App.css'
import { createGlobalStyle } from 'styled-components'
import { Title } from './components/title'
import { Cards } from './components/cards'

function App() {
  return (
    <>
      <GlobalStyle />
      <Title>Expanding Cards</Title>
      <Cards></Cards>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Muli&display=swap');

* {
    box-sizing: border-box;

}

body {
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
`

export default App
