const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl space-y-4 my-5">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-black text-white absolute right-0 mr-10 px-3 py-1">${price}</p>
      <div className="card-body text-center">
        <h2 className="text-center text-xl font-medium">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
