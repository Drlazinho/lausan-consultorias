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