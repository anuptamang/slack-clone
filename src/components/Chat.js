import React, {useState, useEffect} from 'react'
import ContentHeader from './ContentHeader';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components'
import ChatMessage from './ChatMessage'

import { useParams } from 'react-router-dom';
import db from '../firebase';
import firebase from 'firebase'

function Chat({user}) {
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState();
  const [input, setInput] = useState('');

  let { channelId } = useParams();

  const getMessages = () => {
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if(channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo
      }

      db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .add(payload)
    }
  }  

  const send = (e) => {
    e.preventDefault()
    sendMessage(input)
    setInput('')
  }
  

  const getChannel = () => {
    db.collection('rooms')
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getMessages();
    getChannel();
  }, [channelId]);

  return (
    <ChatContainer>
      <ContentHeader channel={channel} />
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((message) => (
            <ChatMessage
              user={user}
              name={message.user}
              text={message.text}
              image={message.userImage}
              timestamp={message.timestamp}
            />
          ))}
      </MessageContainer>
      <InputMessageContainer>
        <InputArea>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Message here" type="text" />
            <BtnSend type="submit" onClick={send}>
              <SendIcon />
            </BtnSend>
        </form>
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
const BtnSend = styled.button`
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
  border: 0;

  :hover {
    opacity: 0.8;
  }

  svg {
    fill: #fff;
    width: 18px;
    height: 18px;
  }
`;
