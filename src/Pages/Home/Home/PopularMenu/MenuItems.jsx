

const MenuItems = ({ item }) => {
    const { image, name, recipe, price } = item;


    return (
        <div className="flex gap-5">
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} className="w-[104px]" alt="" />
            <div>
                <p className="text-base font-normal">{name}----------</p>
                <p className="text-sm font-normal">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-normal text-base">${price}</p>
        </div>
    );
};

export default MenuItems;