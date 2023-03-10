import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const Admin = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://scheduplannr-server.vercel.app/user");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id: number) => {
    fetch(`https://scheduplannr-server.vercel.app/user/admin/${id}`, {
      method: "PUT",
      headers:{
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="my-5 ml-5 text-3xl font-bold">All Users</h2>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, i: number) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs bg-primary border-none text-white"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs bg-red-400 text-white border-none">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
