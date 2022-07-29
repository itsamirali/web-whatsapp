import React from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, IconButton } from "@mui/material";
import * as EmailValidator from "email-validator"

const Sidebar = () => {
  const createChat = () => {
    const input = prompt(
      "please enter an email address for the user you wish to chat with"
    );
    if (!input) return null
    if (EmailValidator.validate(input)) {
        // add email to db
    }
  };
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="search in chat" />
      </Search>
      <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;
const SidebarButton = styled(Button)`
  width: 100%;
  color: #000;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid whitesmoke;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;
