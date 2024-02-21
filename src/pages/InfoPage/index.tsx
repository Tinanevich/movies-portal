import routeMain from './routes';
import Sunflower from '../../assets/img/sunflower.jpg';

import './styles.scss';

const InfoPage = () => {
    return (
        <div className='info'>
            <img className='info-image' src={Sunflower} alt='Sunflower'/>
            <div  className='info-content'>
                <h2 className='info-title'>Дипломный проект</h2>
                <p className='info-text'>Технологии: JS, HTML, SASS, React, Redux, TypeScript, GIT</p>
                <p className='info-date'>Февраль 2024</p>
            </div>
        </div>
    )
}

export { routeMain };

export default InfoPage;