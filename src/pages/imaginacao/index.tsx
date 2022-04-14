import React from 'react'
import { Container } from './styles'
import ImaginacaoBanner from '../../assets/img/imaginacaoBanner.jpg'

export default function Imaginacao() {
  return (
    <Container>
      <h1>Imaginação</h1>
      <img src={ImaginacaoBanner} alt="Imagem representativa, uma pessoa imaginando algo"  title='Imagem representativa, uma pessoa imaginando algo'/>

      <div className="text">
        <h2>
          A imaginação é a matéria prima que nos leva rumo a novas oportunidade
          e realidades.
        </h2>
        <p>
          Negócios e empresas só se superam no âmbito da sua própria imaginação.
          <br />
          <br />
          Sabemos que sempre é desafiador pensar diferente, pois o nosso cérebro
          já está cheio de certezas, limitando novas abordagens e criatividade.
          <br />
          <br />
          Quando temos imaginação e podemos criar novas ideias, desenvolvemos
          novas capacidades em um mundo que necessita encontrar constantemente
          novos caminhos.
          <br />
          <br />A imaginação gera empresas e a razão gere e direciona empresas.
        </p>
      </div>
    </Container>
  )
}
