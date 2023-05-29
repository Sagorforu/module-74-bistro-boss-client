import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [refetch, cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"wanna add more?"}
      ></SectionTitle>
      <div className="bg-white mx-20 my-20">
        <div className="flex justify-evenly py-10  text-3xl font-bold uppercase">
          <h2>Total Orders: {cart.length}</h2>
          <h2>Total Price: ${total}</h2>
          <button className="text-xl rounded uppercase bg-[#D1A054] text-white btn-sm">
            Pay
          </button>
        </div>
        {/* Table content */}
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full mx-20 mb-20">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="bg-[#D1A054]">
                <th className="bg-[#D1A054]">SL</th>
                <th className="bg-[#D1A054]">ITEM IMAGE</th>
                <th className="bg-[#D1A054]">ITEM NAME</th>
                <th className="bg-[#D1A054]">PRICE</th>
                <th className="bg-[#D1A054]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={row.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td>${row.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(row)}
                      className="text-xl bg-[#B91C1C] p-3 rounded text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
