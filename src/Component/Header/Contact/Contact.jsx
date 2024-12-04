import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import home from "../home.png"

export default function Contact() {
  return (
    <div className='contact'>
    <h1>CONTACT</h1>
    <Link to="/" className="home">
    <img src={home} alt=""></img></Link>
    </div>
  )
}
