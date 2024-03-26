import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsLists from "./features/posts/PostsList"

function App() {

  return (
    <>
    <div className='app'>
      <h1>React With Rails</h1>
      <p>Some text</p>
      <PostsLists />
    </div>
    </>
  )
}

export default App
