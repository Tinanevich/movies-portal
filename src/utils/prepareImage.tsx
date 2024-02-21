import defaultImage from '../assets/img/defaultImage.jpg';

const prepareImage = (url: string | undefined) => url ?
                    <img className="film-image" src={url} alt='show' /> :
                    <img className="film-image" src={defaultImage} alt='show' />

export default prepareImage;