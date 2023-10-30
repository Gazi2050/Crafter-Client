import AboutUs from "../AboutUs/AboutUs";
import BrandsCards from "../BrandCards/BrandsCards";
import Header from "../Header/Header";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandsCards></BrandsCards>
            <AboutUs></AboutUs>
            <Review></Review>
        </div>
    );
};

export default Home;