import styled from 'styled-components'
import { Card } from '../card'

const Cards = () => {
  return (
    <Section>
      <Card urlImage="https://images.unsplash.com/photo-1589395937920-07cce323acba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80">
        Explore The World
      </Card>
      <Card urlImage="https://images.unsplash.com/photo-1516571137133-1be29e37143a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80">
        Wild Forest
      </Card>
      <Card urlImage="https://images.unsplash.com/photo-1618741612051-26ffe925da83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80">
        Sunny Beach
      </Card>
      <Card urlImage="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        City on Winter
      </Card>
      <Card urlImage="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80">
        Mountains - Clouds
      </Card>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  width: 90vh;
`

export { Cards }
