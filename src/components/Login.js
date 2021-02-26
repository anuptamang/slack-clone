import React from 'react'
import styled from 'styled-components'

import slackImg from '../assets/slack-img.png'

import { auth, provider } from '../firebase'


function Login(props) {
  const signIn = () => {
     auth.signInWithPopup(provider)
      .then(result => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL
        }
        localStorage.setItem('user', JSON.stringify(newUser))
        props.setUser(newUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }
  
  return (
    <Container>
      <Content>
        <SlackImg src={slackImg} />
        <h1>Sign in to Slack</h1>
        <SignInButton onClick={signIn}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const Content = styled.div`
  width: 350px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 50px;
  background: #fff;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
`;
const SlackImg = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto 10px;
`;

const SignInButton = styled.button`
  background: #2c9e54;
  padding: 6px 20px;
  margin: 0 0 20px;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s linear;

  :hover {
    opacity: 0.8;
  }
`;