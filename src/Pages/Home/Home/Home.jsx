import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroIntro from "./BistroIntro/BistroIntro";
import CallUs from "./CallUs/CallUs";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroIntro></BistroIntro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;