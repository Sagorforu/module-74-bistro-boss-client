import { Link } from "react-router-dom";
import Cover from "../../Cover/Cover";
import MenuItems from "../../Home/Home/PopularMenu/MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-10">
        { title && <Cover img={img} title={title}></Cover> }
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 hover:bg-black uppercase">
        ORDER YOUR FAVOURITE FOOD
        </button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
