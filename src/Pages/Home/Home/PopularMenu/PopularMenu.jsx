import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";
import useMenu from "../../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="my-10">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    popular.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 hover:bg-black uppercase">view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;