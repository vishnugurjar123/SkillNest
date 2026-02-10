import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // 👈 NEW
  const { login,backendUrl } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading(
      isAdmin ? "Logging in as Admin..." : "Logging in..."
    );

    try {
      const res = await axios.post(
        backendUrl+'/api/auth/login',
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      login(res.data.user, res.data.token);

      toast.success("Login successful 🎉", { id: toastId });

      // ✅ ROLE BASED REDIRECT
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed",
        { id: toastId }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          {isAdmin ? "Admin Login" : "Login to SkillNest"}
        </h2>

        {/* 👇 Toggle Text */}
        <p
          onClick={() => setIsAdmin(!isAdmin)}
          className="text-center text-sm text-blue-600 cursor-pointer mb-6 hover:underline"
        >
          {isAdmin ? "Login as User" : "Login as Admin"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={isAdmin ? "Admin Email" : "Email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold transition
              ${isAdmin
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {isAdmin ? "Login as Admin" : "Login"}
          </button>
        </form>

        {!isAdmin && (
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
