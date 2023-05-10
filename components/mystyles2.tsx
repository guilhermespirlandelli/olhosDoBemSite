import styled from "styled-components";

const Container = styled.div`
  background-image: url(/images/bg.png);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  width: 100%;
`;

const TopBarIcons = styled.div`
  display: flex;
  margin: 0 0 0 2%;
  32%;
  justify-content: space-around;  
`;

const TopBarWrite = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68%;
`;

const OptionOne = styled.text`
  color: #fff200;
  font-family: Bebas Neue, sans-serif;
  font-size: 2.3em;
  margin: 2%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (max-width: 1152px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Option = styled.text`
  color: white;
  font-family: Bebas Neue, sans-serif;
  font-size: 2.3em;
  margin: 2%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (max-width: 1152px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Icones = styled.img`
  max-width: 90%;
  height: auto;
  margin: 2%;
  @media only screen and (max-width: 1152px) {
    max-width: 50%;
  }
`;

const IconeInstagram = styled.img`
  max-width: 90%;
  height: auto;
  margin: 2%;
  @media only screen and (max-width: 1152px) {
    max-width: 50%;
  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 10% 0 10%;
`;

const Imagem = styled.img`
  height: 35%;
  width: 36%;
  margin: 0 0 2% 0;
`;

const Title = styled.text`
  font-family: Bebas Neue, sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: white;
  padding-top: 10%;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.text`
  font-family: Bebas Neue, sans-serif;
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 0 5%;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  
`;

const Button = styled.button`
  margin: 5% 0;
  padding: 3% 0 3% 0;
  height: 10%;
  width: 40%;
  border-radius: 50px;
  background-color: #fff200;
  border-color: white;
  font-family: Bebas Neue, sans-serif;
  font-weight: bold;
  font-size: 3rem;
  color: #008b96;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export {
  Container,
  TopBar,
  Option,
  OptionOne,
  Icones,
  IconeInstagram,
  TopBarWrite,
  TopBarIcons,
  Body,
  Imagem,
  Text,
  Title,
  Button,
  StyledLink,
};
