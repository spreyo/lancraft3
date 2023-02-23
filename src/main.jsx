import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <App />
    <Footer />
  </>
  ,
)
