import { useEffect, useState } from "react";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === "popular")
            setMenu(popularMenu)
        })
    },[])


    return (
        <section>
            <SectionTitle
            subHeading={"Check it out"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;