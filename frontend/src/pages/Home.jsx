import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2  items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Learn Skills That <br />
              <span className="text-blue-400">Shape Your Future</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg">
              SkillNest helps you learn industry-ready skills with short,
              practical courses taught by experts.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/courses"
                className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Explore Courses
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 border border-slate-400 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="Learning"
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-blue-600">SkillNest?</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {[
            { title: "Short Courses", icon: "⏱️", desc: "Learn in weeks, not years." },
            { title: "Expert Mentors", icon: "🎓", desc: "Industry professionals." },
            { title: "Practical Learning", icon: "🛠️", desc: "Hands-on projects." },
            { title: "Career Growth", icon: "🚀", desc: "Boost your career." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Start Learning?
          </h2>
          <p className="mt-4 text-blue-100">
            Join SkillNest today and build skills that matter.
          </p>

          <Link
            to="/register"
            className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
