import React from 'react'
import './WhatsApp.css'
import WhatsappIcon  from "./Whatsapp/Whatsapp icon.svg"


const WhatsApp = () => {
  return (
    <>
    <a
        href="https://wa.me/2348137253138"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsappIcon} ></img>
    </a>
    </>
  )
}

export default WhatsApp