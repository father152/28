import React from 'react'
import "./about.css"
import home from "../home.png"
import { Link } from 'react-router-dom'
import LoremIpsum from 'react-lorem-ipsum'


export default function About() {
  return (
    <div className="about">
    <h1>ABOUT</h1>
    <p><LoremIpsum /><LoremIpsum />
    <LoremIpsum /><LoremIpsum />
    <LoremIpsum />
     <LoremIpsum />
    <LoremIpsum />
     <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
     <LoremIpsum />
    <LoremIpsum />
    </p>
    <Link to="/" className="home">
    <img src={home} alt=""></img></Link>
  
  </div>
  )
}
