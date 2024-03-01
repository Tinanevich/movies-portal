import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
      <footer>
        <div className="mainFooter">
          <p className='description'>Дипломный проект</p>
          <p className='date'>Февраль 2024</p>
          <p className='bio'><small className='madeBy'>Made by </small>Кристина Аневич</p>
        </div>
      </footer>
    );
  }

  export default Footer;