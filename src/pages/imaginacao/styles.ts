import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    
    img{
    width: 60%;
    max-height: 400px;
    object-fit: cover;
    box-shadow: 2px 5px 8px 0px rgba(50, 50, 50, 0.61);
    animation: go-back 1s;

  }

  .text{
    animation: go-back 1.3s;

    h2{
      margin-bottom: 1rem;
      animation: go-back 1.1s;

    }

    padding: 20px;
    font-size: 20px;
    color: #002060;

  }

  
  @keyframes go-back {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
  }
`;