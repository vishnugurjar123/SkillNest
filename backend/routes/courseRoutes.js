import express from "express";
import auth from "../middleware/authMiddleware.js";
const coursesrouter = express.Router();
import {
  getCourses,
  enrollCourse,
  getEnrolledCourses
} from "../controllers/courseController.js";

coursesrouter.get("/", getCourses);
coursesrouter.post("/enroll/:id", auth, enrollCourse);
coursesrouter.get("/enrolled", auth, getEnrolledCourses);

export default coursesrouter;
