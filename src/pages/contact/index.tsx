import React from 'react'
import { Container } from './styles'
import ContatoBanner from '../../assets/img/contato.jpg'


export default function Contact() {
  return (
    <Container>
      <form action="https://formsubmit.co/contatolausan@lausanconsultoria.com.br" method="POST">
        <fieldset>
          <h2>Entre em Contato Conosco</h2>
          <label>Nome:</label><br/>
          <input className="entrada"  name='nome' type="text" placeholder='Digite o seu nome' required/><br/><br/>

          <label>E-mail:</label><br/>
          <input className="entrada"  name='email' type="email" placeholder='Digite o seu email' required/><br/><br/>

          <label>Empresa:</label><br/>
          <input className="entrada"  name='empresa'type="text" placeholder='Digite o nome da sua empresa' required/><br/><br/>

          <label>Mercado:</label><br/>
          <input className="entrada" type="text" placeholder='Qual é o seu produto/mercado' required/><br/><br/>

          <label>Mensagem:</label><br/>
          <textarea name="mensagem" className="textarea" placeholder='Digite a sua mensagem.' required/><br/><br/>

          <input type="submit" value="Enviar" />

        </fieldset>
      </form>

      <img src={ContatoBanner} alt="" />
    </Container>
  )
}
