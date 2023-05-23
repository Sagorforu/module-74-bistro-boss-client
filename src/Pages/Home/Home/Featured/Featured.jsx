import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-10 my-20">
            <SectionTitle
            subHeading={'Check it out'}
            heading={"from our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36 bg-black bg-opacity-40  mt-10">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10 space-y-4">
                <p className="font-normal text-3xl">March 20, 2023</p>
                <p className="uppercase text-3xl font-medium">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet obcaecati, dolor in dignissimos delectus eaque reprehenderit mollitia impedit veritatis temporibus totam, quos asperiores, animi ratione. Veniam incidunt expedita quae perferendis harum, excepturi possimus numquam officiis velit. Saepe consequatur ex at?</p>
                <button className="btn btn-outline border-0 border-b-4 hover:bg-black text-white">READ MORE</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;