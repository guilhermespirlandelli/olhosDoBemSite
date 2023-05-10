import styled from "styled-components";

const Container = styled.div`
  background-image: url(/images/bg.png);
  min-height: 100vh;
  padding: 100px;
  display: block;
`;

const TopBar = styled.div`
  display: inline-flex;
  text-align: center;
  align-items: center;
  margin: 0px 0px 25px 85px;
`;

const TopBarIcons = styled.div`
  margin-left: 200px;
`;

const TopBarWrite = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  display: inline-flex;
`;

const OptionOne = styled.text`
  color: #fff200;
  font-family: Arial;
  font-size: 22px;
  margin: 25px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Option = styled.text`
  color: white;
  font-family: Arial;
  font-size: 22px;
  margin: 25px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Icones = styled.img`
  height: 43px;
  width: 42px;
  margin: 20px;
`;

const Body = styled.div`
  display: inline-flex;
`;

const Imagem = styled.img`
  height: 650px;
  width: 650px;
  margin: 0px 0px 0px 0px;
`;

const Title = styled.text`
  font-family: Arial black;
  font-size: 50px;
  color: white;
  padding-top: 50px;
`;

const Text = styled.text`
  font-family: Arial;
  font-size: 42px;
  color: white;
  padding-top: 75px;
  text-align: center;
  margin: -20px 50px 0px 50px;
`;

const Button = styled.button`  
  margin: 60px 0px 0px 0px;
  height: 100px;
  width: 350px;
  border-radius: 50px;
  background-color: #fff200;
  border-color: white;
  font-family: Arial black;
  font-size: 30px;
  color: #008b96;
  &:hover {
    cursor: pointer;
  }
`;

export {
  Container,
  TopBar,
  Option,
  OptionOne,
  Icones,
  TopBarWrite,
  TopBarIcons,
  Body,
  Imagem,
  Text,
  Title,
  Button,
};
