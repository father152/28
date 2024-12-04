import React from 'react'
import { Link } from 'react-router-dom'
import home from "../home.png"
import "./portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio">
    <h1>PORTFOLIO</h1>
    <Link to="/" className="home">
    <img src={home} alt=""></img></Link>
    </div>
  )
}
