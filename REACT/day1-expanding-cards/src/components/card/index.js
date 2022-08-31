import React, { useState } from 'react'

import styled, { css } from 'styled-components'

const Card = (props) => {
  const [active, setActive] = useState(false)
  return (
    <Panel
      isActive={active}
      onClick={() => {
        setActive(true)
      }}
      urlImage={props.urlImage}
    >
      <PanelTitle isActive={active}>{props.children}</PanelTitle>
    </Panel>
  )
}

const Panel = styled.section`
  background: url(${(props) => props.urlImage});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  flex: 0.5;
  ${(props) =>
    props.isActive &&
    css`
      flex: 5;
    `}
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
`

const PanelTitle = styled.h3`
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
    `}
  text-shadow: 2px 2px #333;
`

export { Card }
