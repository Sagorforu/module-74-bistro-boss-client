import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>

      <SectionTitle
        subHeading={"How Many"}
        heading={"manage all users"}
      ></SectionTitle>
      <div className="bg-white mx-20 my-20">
        <div className="mx-20 py-10 text-xl lg:text-3xl font-medium lg:font-bold uppercase">
          <h2 className="">Total users: {users.length}</h2>
        </div>
        {/* Table content */}
        <div className="overflow-x-auto flex justify-between w-full text-normal font-normal">
          <table className="table w-full mx-20 mb-20">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="">
                <th className="bg-[#D1A054]">SL</th>
                <th className="bg-[#D1A054]">Name</th>
                <th className="bg-[#D1A054]">Email</th>
                <th className="bg-[#D1A054]">Role</th>
                <th className="bg-[#D1A054]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "Admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-xl bg-[#D1A054] p-3 rounded text-white"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
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

export default AllUsers;
