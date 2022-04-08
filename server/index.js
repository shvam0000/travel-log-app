const { request, response } = require("express");
const express = require("express")
const app = express();
// const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const multer = require("multer");


app.use(express.json());
// dotenv.config();



const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://travelMERNApp:travelMERNApp123@travelappdb.i3okb.mongodb.net/travelAppDB?retryWrites=true&w=majority"
 
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(5000, () => console.log(`Connected to MongoDB, Server running on port: ${PORT}`)))
   .catch((error) => console.log(error.message) );

   // // set up storage for uploading images 
   // const storage = multer.diskStorage({
   //   destination: (req, file, cb) => {
   //     cb(null, "images");
   //   },
   //   filename: (req, file, cb) => {
   //     cb(null, req.body.name);
   //   },
   // });

   // const upload = multer({ storage: storage });
   // app.post("/upload", upload.single("file"), (req, res) => {
   //   res.status(200).json("File has been uploaded");
   // });


app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/posts", postRoute)
