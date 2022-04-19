import { Container, Content } from './styles'
import HomeBanner from '../../assets/img/homeBanner.jpg'
import Home3 from '../../assets/img/home3.jpg'
import Home2 from '../../assets/img/home2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import './styleSwiper.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export default function Home() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={HomeBanner} alt="" />
          <h1>
            DESENVOLVENDO MAIS VENDAS <br />
            PARA A EMPRESA E FORTALECENDO A SUA MARCA
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home2} alt="" />
          <h1>
            DESENVOLVENDO MAIS VENDAS <br />
            PARA A EMPRESA E FORTALECENDO A SUA MARCA
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home3} alt="" />
          <h1>
            DESENVOLVENDO MAIS VENDAS <br />
            PARA A EMPRESA E FORTALECENDO A SUA MARCA
          </h1>
        </SwiperSlide>
      </Swiper>
      <Container>
        <Content>
          <h2>
            Construímos nosso trabalho com foco nos aspectos positivos,
            vantagens e oportunidades. O nosso objetivo é desenvolver
            estratégias e ações para alavancar cada vez mais a sua empresa. Por
            isso trabalhamos com os seguintes pilares :
          </h2>

          <ol>
            <li>Informação</li>
            <li>Planejamento</li>
            <li>Comunicação</li>
          </ol>
          <br />
          <p>
            A Lausan desenvolve projetos personalizados com soluções para o seu
            departamento de vendas, treinamento e marketing. <br />
            <br />
            Trabalhando com a sua empresa na condução de estratégias e ações
            mensuráveis para promover o progresso para seus negócios,
            identificando oportunidades e novos caminhos para impulsionar as
            melhorias. <br />
            <br />
            Nós trabalhamos com indicadores de desempenho, assim sempre
            poderemos apresentar ferramentas de diversidade sobre uma nova ótica
            de trabalho.
            <br />
            <br />
            Mais do que nunca, nesse período pós pandemia a melhor forma de
            transformar o seu futuro é aprender, desaprender e reaprender.
            <br />
            <br />O que faz a diferença no final são os resultados. Isso
            transforma o presente em futuro.
          </p>
        </Content>
      </Container>
    </>
  )
}
