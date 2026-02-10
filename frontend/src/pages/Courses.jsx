import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  const { token, backendUrl } = useContext(AuthContext);

  // 🔹 Get all courses
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/courses`)
      .then((res) => setCourses(res.data))
      .catch(() => toast.error("Failed to load courses"));
  }, [backendUrl]);

  // 🔹 Get enrolled courses
  useEffect(() => {
    if (!token) return;

    axios
      .get(`${backendUrl}/api/courses/enrolled`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEnrolled(res.data.map((c) => c._id));
      })
      .catch(() => toast.error("Failed to load enrolled courses"));
  }, [token, backendUrl]);

  // 🔹 Enroll course
  const enrollCourse = async (id) => {
    if (!token) {
      toast.error("Please login to enroll");
      return;
    }

    try {
      await axios.post(
        `${backendUrl}/api/courses/enroll/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEnrolled((prev) => [...prev, id]);
      toast.success("Enrolled successfully ");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Enrollment failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const isEnrolled = enrolled.includes(course._id);

          return (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-3">
                  {course.description || "No description available"}
                </p>

                <p className="text-sm text-gray-500">
                  ⏱ {course.duration}
                </p>
              </div>

              <button
                disabled={isEnrolled}
                onClick={() => enrollCourse(course._id)}
                className={`mt-5 py-2 rounded-lg font-semibold transition
                  ${
                    isEnrolled
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }
                `}
              >
                {isEnrolled ? "Enrolled " : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
