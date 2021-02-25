import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <Container>
      <AvatarImg>
        <img src="https://i.imgur.com/6VBx3io.png" alt=""></img>
      </AvatarImg>
      <MsgInfo>
        <Title>
          <Name>Anup Tamang</Name>
          <Time>2/23/2021 11:13:55 AM</Time>
        </Title>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati magni eveniet dicta quae rem a eos nisi repellat maxime? Doloribus cupiditate sunt ea quod ullam omnis saepe aspernatur quas?
        </Message>
      </MsgInfo>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
  padding: 10px 20px;
  transition: all 0.3s;
  display: flex;

  :hover {
    background: #e8e7e747;
  }
`;

const AvatarImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 10px 0 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const MsgInfo = styled.div`
  width: calc(100% - 46px);
  font-size: 15px;
  line-height: 22px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`
const Name = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`;
const Time = styled.div`
  color: rgb(97, 96, 97);
  font-size: 12px;
  line-height: 17px;
  margin-left: 10px;
`;
const Message = styled.div``;