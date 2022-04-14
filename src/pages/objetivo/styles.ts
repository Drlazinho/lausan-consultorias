import styled from "styled-components";
import ObjetivoBanner from '../../assets/img/objetivoBanner.jpg'


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
clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
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