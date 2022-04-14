import React from 'react'
import { Container } from './styles'
import ObjetivoBanner from '../../assets/img/objetivoBanner.jpg'

export default function Objetivo() {
  return (
    <Container>
      <h1>Objetivos</h1>
      <img src={ObjetivoBanner} alt="Fotografia de um alvo de dados" title='Fotografia de um alvo de dados'/>

      <div className="text">
        <h2>Objetivos da empresa : como e porquê definir.</h2>
        <p>
          Existe uma frase para explicar a importância de se definir um objetivo
          :
          <br />
          <br />
          “ Se você não sabe aonde quer chegar, qualquer caminho lhe servirá. “
          <br />
          <br />
          Ter clareza sobre o objetivo é essencial para a sobrevivência da
          empresa. O objetivo traz à tona os resultados quantitativos e
          qualitativos que devem ser alcançados em um determinado espaço de
          tempo, levando-se em conta o cenário em que o negócio está inserido e
          seus desafios mercadológicos.
          <br/>
          <br/>A imaginação gera empresas e a razão gere e direciona empresas.
        </p>
      </div>
    </Container>
  )
}
