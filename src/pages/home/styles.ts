import styled from "styled-components";
import HomeBanner from '../../assets/img/homeBanner.jpg'

export const Container = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  background-image:  url(${HomeBanner}) cover no-repeat;
  text-align: center;
  padding: 20px;

  img{
    width: 50%;
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

`;