import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">
          About SkillNest
        </h1>

        <p className="text-gray-600 text-lg text-center mb-10">
          SkillNest is a modern learning platform designed to help students
          discover short-term courses and workshops that build real-world skills.
        </p>

        {/* Mission */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            🎯 Our Mission
          </h3>
          <p className="text-gray-600">
            To empower students with industry-relevant skills through curated
            courses, expert instructors, and an easy-to-use digital platform.
          </p>
        </div>

        {/* Why SkillNest */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            🚀 Why SkillNest?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✔ Short & practical courses
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✔ Expert instructors
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✔ Easy enrollment
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✔ User-friendly dashboard
            </div>
          </div>
        </div>

        {/* Who can join */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            👥 Who Can Join?
          </h3>
          <p className="text-gray-600">
            Students, freshers, and working professionals who want to upgrade
            their skills and stay competitive in the job market.
          </p>
        </div>

      </div>
    </div>
  );
};



export default About;
