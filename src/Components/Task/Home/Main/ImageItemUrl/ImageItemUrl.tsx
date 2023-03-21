import { Link } from 'react-router-dom';
import './image-item-url.scss';

const ImageItemUrl = (props: {elem: { urls: { full: string; }; user: { name: string; }; id: number; }} ) => {

    const { full } = props.elem.urls;
    const { name } = props.elem.user;
    const { id } = props.elem;

    
    return(
        <div className='ImageItemUrl'>
            <div className="ImageItemUrl-name">
                <Link to={'/'}>
                    <img src='https://img.icons8.com/fluency/1x/reply-arrow.png' alt="" />
                </Link>
                <h4>{name}</h4>
            </div>
            <div className="ImageItemUrl-image">
                <img src={`${full}`} alt="" />
            </div>
        </div>
    )
};

export default ImageItemUrl;