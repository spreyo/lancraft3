import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Spacer } from './components/Spacer'
import { TextCard } from './components/TextCard'
import { Link, Route } from "wouter"
import { Home } from './pages/Home'
import { ATeam } from './pages/ATeam'

function App() {
  const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;


  return (
    <>
      <Route path="/">{() => location.pathname = "/home"}</Route>
      <Route path="/home"><Home /></Route>
      <Route path="/ateam"><ATeam /></Route>
    </>
  )
}

export default App
