import React from 'react'
import { useToast } from './Toast/useToast'

export const Home = () => {
  const toast = useToast()
  const showToast = () => {
    toast.open(`Toast created from child component! ${Math.random() * 2332}`)
  }

  return (
    <div>
      <h3>Hello from Home Component</h3>
      <button onClick={showToast}>Create notification</button>
    </div>
  )
}