import React, {useState, useEffect} from 'react'
import db from '../firebase'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
import { sidebarItems } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

//import formControl
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

//Modal import starts
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//Modal import ends

//Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Sidebar(props) {
  const history = useHistory();

  const [input, setInput] = useState('');

  //Modal scripts
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewChannel = (event) => {
    event.preventDefault();
    db.collection('rooms').add({
      name: input
    })
    setInput('');
    setOpen(false);
  }

  const goToChannel = (id) => {        
    if(id) {
      history.push(`/room/${id}`)
    }
  }

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
          <AddIconHolder>
            <AddIcon onClick={handleOpen} />
          </AddIconHolder>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <form>
                  <h4>Create a channel</h4>
                  <FormControl>
                    <InputLabel>Channel Name</InputLabel>
                    <Input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                    />
                    <Button
                      type="submit"
                      onClick={createNewChannel}
                      variant="contained"
                      color="primary"
                      disabled={!input}
                    >
                      Create
                    </Button>
                  </FormControl>
                </form>
              </div>
            </Fade>
          </Modal>
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((room) => (
            <Channel onClick={() => goToChannel(room.id)}># {room.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </SidebarContainer>
  );
}

export default Sidebar

const SidebarContainer = styled.div`
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  height: calc(100vh - 38px);
  overflow-y: auto;
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

  :last-child {
    margin-bottom: 50px;
  }

  :hover {
    background: #350d36;
  }
`;

const AddIconHolder = styled.div`
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;