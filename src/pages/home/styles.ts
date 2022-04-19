import styled from "styled-components";


export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 7%;

  h1{
    margin: 1rem;
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