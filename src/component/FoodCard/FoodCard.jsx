import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id ,image, name, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [refetch, ] = useCart();

  const handleAddToCart = item => {
    console.log(item)
    if (user) {
      const cartItem = {menuItemId: _id, name, image, recipe, price, email: user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          refetch(); // refetch cart to update the number of items in the cart
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Food added in cart successfully',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      }) 
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from:location}})
        }
      })
    }
  }

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
          <button onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-[#E8E8E8] border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] hover:bg-black border-0 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
