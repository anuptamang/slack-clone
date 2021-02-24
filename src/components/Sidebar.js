import React from 'react'

import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
import { sidebarItems } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
  return (
    <SidebarContainer>
      <WorkSpaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <CreateIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          <Channel>#Channel 1</Channel>
          <Channel>#Channel 2</Channel>
        </ChannelsList>
      </ChannelsContainer>
    </SidebarContainer>
  );
}

export default Sidebar

const SidebarContainer = styled.div`
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
`;

const WorkSpaceContainer = styled.div`
  color: #fff;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid rgb(82, 38, 83);
`;

const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3f0e40;
  cursor: pointer;
  transition: all 0.3s linear;

  :hover {
    opacity: 0.7;
  }
`;

const MainChannels = styled.div`
  padding: 10px 0;
`;
const MainChannelItem = styled.div`
  color: rgb(207, 195, 207);
  display: grid;
  grid-template-columns: 15% auto;
  padding: 5px 15px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: #fff;
`;

const NewChannelContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  padding: 5px 15px;
`;

const ChannelsList = styled.div`
  
`;

const Channel = styled.div`
  padding: 5px 15px;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;