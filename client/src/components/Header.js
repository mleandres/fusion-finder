import React from 'react';
import icon from '../common/media/icon.png'

const Header = () => {
  return (
    <div style={{ padding: "1em" }} className="ui container">
      <h1 className="ui header">
        <img className="ui tiny image" src={icon} alt="Fusion Finder"/>
        <div className="content">
          Fusion Finder
        </div>
      </h1>
    </div>
  )
}

export default Header;
