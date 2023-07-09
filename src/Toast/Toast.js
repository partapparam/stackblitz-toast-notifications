import React from 'react'
import { useTimeout } from '../hooks/useTimeout'

export const Toast = (props) => {
  useTimeout(props.close, 5000)

  return (
    <div>
      <div>
        {props.children}
      </div>
      <button onClick={props.close}>x</button>
    </div>
  )
}