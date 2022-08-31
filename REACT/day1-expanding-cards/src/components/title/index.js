import React, { useEffect } from 'react'

const Title = (props) => {
  useEffect(() => {
    document.title = props.children
  })
}

export { Title }
