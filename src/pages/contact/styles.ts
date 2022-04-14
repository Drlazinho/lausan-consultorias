import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1rem;

  form{
    width: 40%;
    
    fieldset{
      padding: 1rem;
      background-color: #4497fc;
      border: none;
      border-radius: 20px;
      
      h2{
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      }

      label{
        font-weight: bold;
      }
  
      input{
      width: 100%;
      padding: .5rem;
      border-radius: 10px;
      outline: none;
      border: none;
      }

      .textarea{
        padding: .8rem;
        min-width: 100%;
        min-height: 13rem;
        resize: vertical;
        border-radius: 10px;
      }

      input[type="submit"]{
        transition: .2s;

        &:hover{
          background-color: #85f776;
        }
      }
    }
  }

  img{
    margin: auto 0;
    height: 40%;
    width: 40%;
    object-fit: cover;
    clip-path: circle(50.3% at 50% 50%);
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;

    form{
      width: 90%;
    }
  }
`;