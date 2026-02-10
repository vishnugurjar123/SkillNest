import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
        setOpen(false);
    };

    return (
        <nav className="bg-slate-900 text-white shadow-md">
            <div className="px-6 py-4 flex justify-between items-center">

              
                <h3 className="text-2xl font-bold tracking-wide">
                    <Link to="/" onClick={() => setOpen(false)}>SkillNest</Link>
                </h3>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-sm md:text-base">
                    <NavLinks user={user} handleLogout={handleLogout} />
                </div>

            {/* //Mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl focus:outline-none"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-slate-800 px-6 pb-6 space-y-4">
                    <NavLinks
                        user={user}
                        handleLogout={handleLogout}
                        mobile
                        close={() => setOpen(false)}
                    />
                </div>
            )}
        </nav>
    );
};

const NavLinks = ({ user, handleLogout, mobile, close }) => (
    <>
        <Link to="/" onClick={close} className="block hover:text-blue-400">
            Home
        </Link>
        
            
              {user?.role !== "admin" && (
    <Link to="/courses" onClick={close} className="block hover:text-blue-400">
        Courses
    </Link>
)}
            
        


        <Link to="/about" onClick={close} className="block hover:text-blue-400">
            About
        </Link>

        <Link to="/contact" onClick={close} className="block hover:text-blue-400">
            Contact
        </Link>

        {user?.role === 'user' && (
            <Link to="/dashboard" onClick={close} className="block hover:text-blue-400">
                Dashboard
            </Link>
        )}

        {user?.role === "admin" && (
            <Link
                to="/admin"
                onClick={close}
                className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-semibold"
            >
                Admin
            </Link>
        )}

        {/* User Info */}
        {user && (
            <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-lg mt-2">
                <span className="text-sm font-medium">{user.name || "User"}</span>
                <span
                    className={`text-xs px-2 py-0.5 rounded-full ${user.role === "admin"
                            ? "bg-yellow-400 text-black"
                            : "bg-green-500 text-white"
                        }`}
                >
                    {user.role}
                </span>
            </div>
        )}

        {!user ? (
            <Link
                to="/login"
                onClick={close}
                className="block text-center px-4 py-2 bg-blue-600 rounded-lg"
            >
                Login
            </Link>
        ) : (
            <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-600 rounded-lg"
            >
                Logout
            </button>
        )}
    </>
);

export default Navbar;
