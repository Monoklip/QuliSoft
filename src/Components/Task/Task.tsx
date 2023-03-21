import './task.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import ImageItemUrl from './Home/Main/ImageItemUrl/ImageItemUrl';

const Task = () => {

    const [dataImage, setDataImage] = useState([]);
    const [url, setUrl] = useState('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');

    const getData = async() => {
        const response = await fetch(url);
        const data = await response.json();

        setDataImage(data);
        console.log(data);
    };

    useEffect(()=>{
        getData();
    },[]);

    return(
        <Routes>
            <Route path='/QuliSoft' element={<Home dataImage={dataImage}/>}></Route>
            {dataImage.map((elem: { urls: { full: string; }; user: { name: string; }; id: number; } ) => {
                return <Route path={`/image/${elem.user.name}/${elem.id}`} element={<ImageItemUrl elem={elem} key={elem.id}/>}></Route>
            })}
        </Routes>
    )
};

export default Task;