import React from 'react'
import ContentHeader from './ContentHeader';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <ChatContainer>
      <ContentHeader />
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <InputMessageContainer>
        <InputArea>
          <input placeholder="Message here" type="text"/>
          <BtnSend>
            <SendIcon />
          </BtnSend>
        </InputArea>
      </InputMessageContainer>
    </ChatContainer>
  );
}

export default Chat

const ChatContainer = styled.div`
  position: relative;
  height: calc(100vh - 38px);
  padding: 60px 0 110px;
`
const MessageContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;
const InputMessageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  padding: 20px;
  background: #fff;
`;

const InputArea = styled.div`
  border: 1px solid #666;
  border-radius: 5px;
  position: relative;
  padding-right: 45px;

  input {
    display: block;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 4px 15px;
    border: 0;
    background: none;
    color: #333;
    font-size: 15px;
    line-height: 20px;
    outline: none;
  }
`
const BtnSend = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: #007a5a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s linear;

  :hover {
    opacity: 0.8;
  }

  svg {
    fill: #fff;
    width: 18px;
    height: 18px;
  }
`;
