import React from 'react';
import sunflower from '../../assets/img/sunflower.jpg';

import './styles.scss';

const InfoPage = () => {
    return (
        <div className='info'>
            <img className='info-image' src={sunflower} alt='sunflower'/>
            <div  className='info-content'>
                <h2 className='info-title'>Дипломный проект</h2>
                <p className='info-text'>Технологии: JS, HTML, SASS, React, Redux, TypeScript, GIT</p>
                <p className='info-date'>Февраль 2024</p>
            </div>
        </div>
    )
}

export default InfoPage;