import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx/router'



function App() {
  

  return (
    <div className="App">
      <RouterProvider router= {router}/>
    </div>
  )
}

export default App
