import { Helmet } from "react-helmet-async";
import Cover from "../../Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover title="our menu" img={menuImage}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's order"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza items */}
      <MenuCategory
        items={pizza}
        title="Pizza"
        img={pizzaImg}
      ></MenuCategory>
      {/* soup items */}
      <MenuCategory
      items={soup}
      title="Soup"
      img={soupImg}
      ></MenuCategory>
      {/* salad items */}
      <MenuCategory
      items={salad}
      title="salad"
      img={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
