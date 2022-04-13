import React from 'react'
import { Container } from "./style"
import { FaInstagramSquare,     FaWhatsappSquare,
  FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <Container>
      <h2>Contatos</h2>
      <div className="content">
      <div className="emails">
        <ul>
          <li>contatolausan@lausanconsultoria.com.br</li>
          <li>esterlausan@lausanconsultoria.com.br</li>
          <li>thiagolausan@lausanconsultoria.com.br</li>
        </ul>
      </div>
      <div className='redes'>
        <ul>
          <li>     <i><FaWhatsappSquare className='icon whatsapp'/></i> <p>(62) 91234-5678yarn</p></li>
          <li><i><FaInstagramSquare className='icon instagram'/></i><p>Instagram</p></li>
          <li><i>          <FaFacebookSquare className='icon facebook'/>
</i><p>Facebook</p></li>
        </ul>
          <i></i>
          
     
      </div>
      </div>

    </Container>
  )
}
