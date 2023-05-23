import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CallUs from "./CallUs/CallUs";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;