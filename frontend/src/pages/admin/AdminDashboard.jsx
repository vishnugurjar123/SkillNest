import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">
        Admin Dashboard 🛠️
      </h1>

      <p className="text-slate-600">
        Manage courses, users and platform content.
      </p>
     <div className="mt-10">
<Link
  to="/admin/courses"
  className="bg-blue-600 text-white px-4  py-2 rounded-lg"
>
  Manage Courses
</Link>
     </div>



    </div>
  );
};

export default AdminDashboard;
