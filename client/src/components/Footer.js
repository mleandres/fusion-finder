import React from 'react';

const Footer = () => {
  return (
    <div className="ui footer segment">
      <div>
        Made by <a href="https://github.com/mleandres" target="_blank" rel="noopener noreferrer">
        Matthew Leandres</a> using React
      </div>
      <div>
        Icon made by{' '}
        <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
        {' from '}
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
        {' is licensed by '}
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
      </div>
    </div>
  )
}

export default Footer;
