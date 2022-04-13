import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    
  img{
    width: 600px;
    object-fit: cover;
  }

  .text{
    h2{
      margin-bottom: 1rem;
    }
    padding: 20px;

    font-size: 20px;
    color: #002060;

  }
`;