import React from "react";

//CSS
import "./Header.css";

//Material Ui
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt=""
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
