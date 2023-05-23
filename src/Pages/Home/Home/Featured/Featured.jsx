import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-items text-white pt-10 my-20">
            <SectionTitle
            subHeading={'Check it out'}
            heading={"from our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p className="font-normal text-3xl">March 20, 2023</p>
                <p className="uppercase text-3xl font-medium">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet obcaecati, dolor in dignissimos delectus eaque reprehenderit mollitia impedit veritatis temporibus totam, quos asperiores, animi ratione. Veniam incidunt expedita quae perferendis harum, excepturi possimus numquam officiis velit. Saepe consequatur ex at?</p>
                <button className="btn btn-primary">READ MORE</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;