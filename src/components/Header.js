import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header({user, logOut}) {

  return (
    <HeaderContainer>
      <HeaderMain>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </HeaderMain>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={logOut}>
          <img
            src={user.photo ? user.photo : 'https://i.imgur.com/6VBx3io.png'}
            alt={user.name}
          />
        </UserImage>
      </UserContainer>
    </HeaderContainer>
  );
}

export default Header

const HeaderContainer = styled.div`
  position: relative;
  background: #350d36;
`;

const HeaderMain = styled.div`
  max-width: 500px;
  width:100%;
  margin: 6px auto 0;
  display: flex;
  justify-content: center;
  color: #fff;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  padding: 0 10px;
`
const Search = styled.div`
  input {
    border-radius: 5px;
    display: block;
    width: 100%;
    background: rgb(67, 30, 68);
    margin: 0;
    padding: 4px 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* box-shadow: inset 0 0 0 1px rgb(104, 74, 104); */
    color: #fff;
    outline: none;

    ::placeholder {
      
    }
  }
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 3px;
`;
const Name = styled.div`
  margin: 0 10px 0 0;
  color: #fff;
  width: 100px;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const UserImage = styled.div`
  width: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 1px;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
  }
`;