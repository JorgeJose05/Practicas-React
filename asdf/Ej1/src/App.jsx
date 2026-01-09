import { useState } from 'react'
import './App.css'
import {Header} from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skill from "./components/Skill.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <Header />
        <Profile name={"Jorge Jose Dumitrache Chust"} age={20} profesion="Mal pagada" />
        <ul>
            <Skill text={"Javascript"} />
            <Skill text={"Angular"} />
            <Skill text={"React"} />
            <Skill text={"Vue.js"} />
        </ul>
        <Footer />
    </>
  )
}

export default App
