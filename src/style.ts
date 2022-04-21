import styled from "styled-components";

export const Content = styled.header`
  background-color: #002060;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  width: 100%;

  .title-logo{
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    padding-bottom: 1rem;

    img{
      filter: invert(100%) grayscale(1) brightness(100);
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    h1{
      font-size: 5rem;
    }
  }

  ul{
    display: flex;
    justify-content: space-around;
    color: #fff;
    text-decoration: none;
    font-size: 24px;
      font-weight: bold;
      transition: .2s;

    .link{
    color: #fff;
  }

  .active{
    color: #ff7b00;
  }
  }

  .btn {
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    background-color:#002060;
    color: #fff;
    font-size: 40px;
    outline: none;
    border: none;
    transition: .2s;

    &:hover{
      color: #ff7b00;
      transform: scale(1.1);
      transform: rotate(360deg);
    }
  }

@media (max-width:1000px) {
  .title-logo{
    justify-content: start;
    align-items: center;

      img{
        width: 60px;
        height: 60px;
      }

      h1{
        font-size: 40px;
      }

  }

  ul{
    flex-direction: column;
        height: auto;
        width: 100%;
        text-align: center;
        margin-right: 0px;
        font-size: 20px;

    ul:nth-child(1){
      border-top: 1px solid rgba(255, 255, 255, 0.555);
        margin-top: 50px;
    }

    li{
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        padding: 10px 0;

  }
  }
  .btn {
        display: block;
    }
  }
`