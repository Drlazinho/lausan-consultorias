import React from 'react'
import PerspectivaBanner from '../../assets/img/perspectivaBanner.jpg'
import { Container } from './styles'


export default function Perspectiva() {
  return (
<Container>
      <h1>Perspectivas</h1>
      <img src={PerspectivaBanner} alt="" />

      <div className="text">
        <h2>
        Quais são as perspectivas para o futuro ?
        </h2>
        <p>
        Em um mercado cada vez mais competitivo, as empresas que pretendem se manter atuantes e gerando
receita e lucros crescentes, necessitam desenvolver uma forte capacidade de agregar valor superior em suas práticas.

          <br />
          <br />
          Portanto é necessário buscar e alavancar os objetivos da organização através do entendimento dos desejos
e necessidades do mercado consumidor.

          <br />
          <br />
          A empresa deve gerar continuamente estratégias que sejam relevantes para o negócio.
        </p>
      </div>
    </Container>  )
}
