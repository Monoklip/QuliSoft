import './image-item.scss';
import { Link } from 'react-router-dom';

const ImageItem = (props: {elem: { urls: { full: string; }; user: { name: string; }; id: number; }} ) => {

    const { full } = props.elem.urls;
    const { name } = props.elem.user;
    const { id } = props.elem;

    return(
        <Link to={`/image/${name}/${id}`}>
            <div className="image-item">
                <div className="image-item_image">
                    <img src={`${full}`} alt="" />
                </div>
                <div className="image-item_name">
                    <h4>{name}</h4>
                </div>
            </div>
        </Link>
    )
};

export default ImageItem;