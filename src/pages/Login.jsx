import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MyNav from "../components/Navbar";

const Container = styled.div`
text-align: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("http://192.168.1.10:8000/2.jpg")
      center ;
      background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
align-items: center;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  width: 91%;

  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  
  background-color: #000;
  color: #FFF;
  
  

  cursor: pointer;
  
  margin-bottom: 10px;
`;

const LinkX = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Announcement />
      <MyNav />

      <Container >
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <LinkX>DO NOT YOU REMEMBER THE PASSWORD?</LinkX>
            <Link to="/Register">Register   <LinkX>CREATE A NEW ACCOUNT</LinkX></Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer color="#FFF" />

    </>
  );
};

export default Login;
