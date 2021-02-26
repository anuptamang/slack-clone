import React from 'react'
import styled from 'styled-components'

function ChatMessage({user, text, name, image, timestamp}) {
  return (
    <Container>
      <AvatarImg>
        <img src={image} alt="" />
      </AvatarImg>
      <MsgInfo>
        <Title>
          <Name>{name}</Name>
          <Time>{new Date(timestamp.toDate()).toLocaleString()}</Time>
        </Title>
        <Message>{text}</Message>
      </MsgInfo>
    </Container>
  );
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