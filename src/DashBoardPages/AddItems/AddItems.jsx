import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_img_hosting_token;
const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const [ axiosSecure ] = useAxiosSecure();
  const img_hosting_URL = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const price = parseFloat(data.price);
          const { name, recipe, category } = data;
          const newItem = { name, recipe, category, price, image:imgURL };
          console.log(newItem);
          axiosSecure.post('/menu', newItem)
          .then(data => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your menu item added successful',
                showConfirmButton: false,
                timer: 1000
              })
            }
          })
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Add Items</title>
      </Helmet>
      <SectionTitle
        subHeading={"What's new"}
        heading={"Add an item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] p-10 lg:mx-28 mx-2 space-y-3"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 120 })}
            placeholder="Type Recipe Name"
            className=" px-3 py-4 w-full lg:w-[830px] rounded-lg"
          />
        </div>
        <div className="lg:flex gap-16">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Select Category"
              {...register("category", { required: true })}
              className="px-3 py-4 w-full lg:w-[400px] rounded-lg"
            >
              <option>Select Category</option>
              <option value="salad">Salad</option>
              <option value="soup">Soup</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className=" px-3 py-4 w-full lg:w-[400px] rounded-lg"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            className=" rounded-lg px-4 pt-2 h-40"
            {...register("recipe", { required: true })}
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            {...register("image", { required: true })}
            className=" py-4 w-full max-w-xs"
          />
        </div>
        <input
          className="px-8 py-3 font-bold text-white bg-gradient-to-r from-[#835D23] to-[#B58130] cursor-pointer"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItems;
