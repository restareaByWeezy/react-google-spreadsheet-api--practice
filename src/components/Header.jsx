import React from "react";
import "../styles/header.scss";

const Header = props => {
  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <img
        className='header-productPicture'
        src={props.imageUrl}
        alt='image'
      />
      <div className='header-info-wrapper'>
        <div className='header-client'>Park Hwigun</div>
      </div>
    </div>
  );
};

export default Header;

