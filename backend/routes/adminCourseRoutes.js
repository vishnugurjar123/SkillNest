import express from 'express'
const adminrouter = express.Router();
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

import {
  addCourse,
  updateCourse,
  deleteCourse,
  getCourses
} from "../controllers/courseController.js";

adminrouter.get("/courses", auth, admin, getCourses);
adminrouter.post("/courses", auth, admin, addCourse);
adminrouter.put("/courses/:id", auth, admin, updateCourse);
adminrouter.delete("/courses/:id", auth, admin, deleteCourse);

export default adminrouter;
