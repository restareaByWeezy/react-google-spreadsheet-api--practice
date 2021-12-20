import React from "react";
import "../styles/header.scss";

const Header = props => {
  const dt = new Date();
  const dtToString = dt.toDateString();

  return (
    <div className='header'>
      <h1>Tarte Chiboust Passion</h1>
      <div className='header-client'>Park Hwigun</div>
      <div className='header-date'>Date Period: {dtToString}</div>
    </div>
  );
};

export default Header;
