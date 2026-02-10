import Course from '../models/Course.js'
import User from '../models/User.js'

// PUBLIC anyone can see
const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

//  ADMIN ONLY
const addCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

// ADMIN ONLY
const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(course);
};

//  ADMIN ONLY
const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};

// USER
const enrollCourse = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user.enrolledCourses.includes(req.params.id)) {
    return res.status(400).json({
      message: "Already enrolled"
    });
  }

  user.enrolledCourses.push(req.params.id);
  await user.save();

  res.json({ message: "Enrolled successfully" });
};

const getEnrolledCourses = async (req, res) => {
  const user = await User.findById(req.user.id)
    .populate("enrolledCourses");

  res.json(user.enrolledCourses);
};
export { getCourses, addCourse, updateCourse, getEnrolledCourses, enrollCourse, deleteCourse }