import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Home = (props: { dataImage: any; }) => {

    return(
        <div>
            <Header/>
            <Main dataImage={props.dataImage}/>
            <Footer/>
        </div>
    )
};

export default Home;