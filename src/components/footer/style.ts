import styled from "styled-components";

export const Container = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: #002060;
  padding: 1rem 0; 
  margin-top: 40px;
  color: #fff;
  text-align: center;

  .content{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5rem;
  }
  .emails{
    text-align: left;
    font-size: 1.2rem;

    li{
      transition: .2s linear;
    }

    li:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

  }
  .redes{
    li{
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: .2s linear;
    }

    li:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    i{
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .emails{
      font-size: .8rem;
    }
  }
`;