import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully 🚀");
    setForm({ name: "", email: "", date: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-800">Contact Us</h1>
        <p className="text-gray-600 mt-4">
          Have questions or need support? Feel free to reach out to us anytime.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
            📞 Contact Information
          </h2>

          <p><strong>Email:</strong> gurjar740@gmail.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>

          <div>
            <strong>Address:</strong>
            <p className="text-gray-600 mt-1">
              4th Floor, Tech Park Tower,<br />
              Gwalior, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mt-6 mb-2">🌐 Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <span className="cursor-pointer">🌍</span>
              <span className="cursor-pointer">📘</span>
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">📸</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-800 flex items-center gap-2 mb-6">
            ✉️ Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
