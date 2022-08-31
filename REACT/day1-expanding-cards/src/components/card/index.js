import styled from 'styled-components'

export const Card = (props) => {
  return (
    <Section>
      <h3>{props.children}</h3>
    </Section>
  )
}
const Section = styled.section``
