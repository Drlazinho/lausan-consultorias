import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    color: #002060;
    padding: 2rem 3.2rem;
    gap: 2rem;

    img{
      max-width: 300px;
      max-height: 300px;
      object-fit: cover;
      box-shadow: 1px 5px 8px 1px rgba(50, 50, 50, 0.61);

    }

    .text {

      h2{
        margin-bottom: 1rem;
      }

      display: flex;
      flex-direction: column;
      font-size: 20px;
    }

    &:nth-child(odd){
      background-color: #9cb7fc;
    }

 @media (max-width:1000px) {
  flex-wrap: wrap;

 }
`;