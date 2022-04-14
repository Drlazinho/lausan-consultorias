import React from 'react'
import Lausan1 from '../../assets/img/lausan1.jpg'
import Lausan2 from '../../assets/img/lausan2.jpg'
import Lausan3 from '../../assets/img/lausan3.jpg'
import Lausan4 from '../../assets/img/lausan4.jpg'
import { Content } from './styles'

export default function LausanConsultoria() {
  return (
    <>
      <Content>
        <img src={Lausan1} alt="Um homem desenhando um gráfico que representa aumento de vendas" title='Um homem desenhando um gráfico que representa aumento de vendas'/>
        <div className="text">
          <h2>O primeiro componente para o crescimento é a estratégia.</h2>
          <p>
            A pandemia chegou e mudou radicalmente a realidade de todos,
            inclusive das empresas. <br /> <br />
            Para vencer hoje e no futuro, você deverá se dedicar a vencer os
            desafios de se transformar para encontrar novas oportunidades.
            <br />
            <br />
            Esta é uma regra fundamental para que a sua empresa esteja preparada
            com competências, que gerem oportunidades, riqueza e valores no
            mercado, junto aos seus clientes e parceiros.
          </p>
        </div>
      </Content>
      <Content>
        <img src={Lausan2} alt="A foto de um olhar para o futuro" title='A foto de um olhar para o futuro'/>
        <div className="text">
          <h2>Tenha um novo olhar direcionado para a sua empresa.</h2>
          <p>
          Uma empresa que constrói uma nova visão de mercado está mais perto do sucesso.<br /> <br />
          Hoje o grande desafio, é inovar. Manter a mente aberta. Identificar oportunidades e 
se posicionar positivamente para continuar na linha de frente no seu segmento de atuação.
          </p>
        </div>
      </Content>
      <Content>
        <img src={Lausan3} alt="Uma fotografia que junta diversos fotos de diversas pessoas de diversas culturas e etnias" title='Uma fotografia que junta diversos fotos de diversas pessoas de diversas culturas e etnias'/>
        <div className="text">
          <h2>Talentos.</h2>
          <p>
          Os colaboradores talentosos são determinantes para gerar um bom clima organizacional.  <br /> <br />
          Além disto, atributos muito valorizados no mundo corporativo como, resiliência, motivação e a auto determinação estão presentes em seu trabalho.  
            <br />
            <br />
            A capacidade de atrair os melhores é um excelente indicador do posicionamento da empresa no mercado. O talento é capital humano.
          </p>
        </div>
      </Content>
      <Content>
        <img src={Lausan4} alt="Foto de um homem branco  usando uma jaqueta azul apertando a mão de uma pessoa negra usando uma camisa branca de forma confiante" title='Foto de um homem branco  usando uma jaqueta azul apertando a mão de uma pessoa negra usando uma camisa branca de forma confiante' />
        <div className="text">
          <h2>Construa um relacionamento duradouro com o seu cliente.</h2>
          <p>
          Um excelente relacionamento construído com os clientes, gera oportunidades de negócios a curto, médio e longo prazo.  <br /> <br />
          Então cultivar um ambiente sólido baseado na confiança fortalecera uma parceria colaborativa.
            <br />
            <br />
            Todo cliente é único, portanto, seus anseios e necessidades são muito particulares,   
além de serem muito importantes.
          </p>
        </div>
      </Content>
    </>
  )
}
