import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user,backendUrl, token } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get(backendUrl+'/api/courses/enrolled', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setCourses(res.data));
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome, <span className="text-blue-600">{user?.name}</span> 👋
          </h2>
          <p className="text-slate-600 mt-1">
            Here are your enrolled courses
          </p>
        </div>

        {/* Courses */}
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          My Enrolled Courses
        </h3>

        {courses.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center text-slate-500">
            No courses enrolled yet 📚
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {course.title}
                </h4>

                <p className="text-slate-600 text-sm mb-3">
                  {course.description || "No description available"}
                </p>

                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  ⏳ {course.duration}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
