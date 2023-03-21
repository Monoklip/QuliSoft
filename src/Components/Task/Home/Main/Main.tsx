import ImageItem from './ImageItem/ImageItem';
import './main.scss';

const Main = (props: { dataImage: any; }) => {
    
    return(
        <div className='main'>
            {props.dataImage.map((elem: { urls: { full: string; }; user: { name: string; }; id: number; } ) => {
                return <ImageItem elem={elem} key={elem.id}/>
            })}
        </div>
    )
};

export default Main;