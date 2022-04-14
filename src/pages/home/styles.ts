import styled from "styled-components";
import HomeBanner from '../../assets/img/homeBanner.jpg'

export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  h1{
    margin: 1rem;
  }

  img{
    width: 50%;
    box-shadow: 1px 2px 8px 1px rgba(50, 50, 50, 0.61);

  }

  @media (max-width:1000px) {
    h1{
      font-size: 1.5rem;
    }
  }

  @media (max-width:480px) {
    img{
      width: 90%;
    }
  }

`;

export const Content = styled.div`
  text-align: justify;
  font-size: 20px;
  color: #002060;

  h2{
    padding: 2rem 0;
    text-align: center;
  }

  li{
    list-style: disc;
    margin-left: 20px;
  }

  @media (max-width:1000px) {
    h2{
      font-size: 1.4rem;
    }
  }
`;