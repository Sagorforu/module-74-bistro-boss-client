import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted response", res);
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading="Hurry up"
        heading="manage all items"
      ></SectionTitle>
      <div className="bg-white mx-20 my-20">
        <div className="flex ml-20 justify-start py-10  text-3xl font-bold uppercase">
          <h2>Total items: {menu.length}</h2>
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
                <th className="bg-[#D1A054]">UPDATE</th>
                <th className="bg-[#D1A054]">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      //   onClick={() => handleDelete(row)}
                      className="text-xl bg-[#D1A054] p-3 rounded text-white"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
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

export default ManageItems;
