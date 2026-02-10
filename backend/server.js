import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import doenv from 'dotenv'
import userrouter from './routes/authRoutes.js'
import coursesrouter from './routes/courseRoutes.js';
import adminrouter from './routes/adminCourseRoutes.js'
doenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth",userrouter);
app.use("/api/courses",coursesrouter );
app.use("/api/admin", adminrouter);


app.listen(5000, () => {
  console.log("Server running on port",port);
});
