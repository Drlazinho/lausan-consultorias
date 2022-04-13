import styled from "styled-components";

export const Content = styled.header`
  background-color: #002060;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  margin-bottom: 1.2rem;

  .title-logo{
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    padding-bottom: 1rem;

    img{
      filter: invert(100%) grayscale(1) brightness(100);
      width: 100px;
    }

    h1{
      font-size: 80px;
    }
  }

  nav{
    display: flex;
    justify-content: space-around;
    color: #fff;
    text-decoration: none;

    p{
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      transition: .2s;
    }

    p:hover{
      color: #ff7b00;
    }
 
  }
`