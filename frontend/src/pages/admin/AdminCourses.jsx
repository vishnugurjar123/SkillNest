import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AdminCourses = () => {
  const { token, backendUrl} = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [instructor, setInstructor] = useState("");

  // edit state
  const [editingId, setEditingId] = useState(null);

  // 🔹 Fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get(backendUrl+'/api/courses')
      setCourses(res.data);
    } catch {
      toast.error("Failed to load courses");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔹 Add / Update course
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !duration) {
      toast.error("Title and Duration are required");
      return;
    }

    setLoading(true);

    try {
      if (editingId) {
        // 🔁 UPDATE
        await axios.put(
          `${backendUrl}/api/admin/courses/${editingId}`,
          { title, description, duration, instructor },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Course updated successfully ");
        setEditingId(null);
      } else {
        // ➕ ADD
        await axios.post(
          backendUrl+'/api/admin/courses',
          { title, description, duration, instructor },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Course added successfully ");
      }

      // reset form
      setTitle("");
      setDescription("");
      setDuration("");
      setInstructor("");

      fetchCourses();
    } catch (err) {
      toast.error(err.response?.data?.message || "Action failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete course
  const deleteCourse = async (id) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      await axios.delete(
        `${backendUrl}/api/admin/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Course deleted ");
      fetchCourses();
    } catch {
      toast.error("Delete failed");
    }
  };

  // 🔹 Edit course (fill form)
  const editCourse = (course) => {
    setEditingId(course._id);
    setTitle(course.title);
    setDescription(course.description || "");
    setDuration(course.duration);
    setInstructor(course.instructor || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Admin • Manage Courses 
        </h1>

        {/* Add / Edit Course */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Course" : "Add New Course"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-lg px-4 py-2"
            />

            <input
              type="text"
              placeholder="Duration (e.g. 4 weeks)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border rounded-lg px-4 py-2"
            />

            <input
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="border rounded-lg px-4 py-2"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg px-4 py-2 md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading
                ? "Saving..."
                : editingId
                ? "Update Course"
                : "Add Course"}
            </button>
          </form>
        </div>

        {/* Course List */}
        <h2 className="text-xl font-semibold mb-4">All Courses</h2>

        {courses.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-center text-slate-500">
            No courses found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
              >
                <h3 className="text-lg font-bold text-slate-800">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  {course.description || "No description"}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    ⏳ {course.duration}
                  </span>

                  {course.instructor && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      👨‍🏫 {course.instructor}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => editCourse(course)}
                    className="flex-1 bg-yellow-500 text-white py-1.5 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="flex-1 bg-red-600 text-white py-1.5 rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourses;
