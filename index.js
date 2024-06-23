import express from "express";
import bodyParser from "body-parser";

const app=express();
const port =3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });
app.get("/deletepost", (req, res) => {
    res.render("deletepost.ejs");
  });
app.get("/viewpost", (req, res) => {
    res.render("viewpost.ejs");
  });
app.get("/editpost", (req, res) => {
    res.render("editpost.ejs");
  });
app.post("/submit",()=>{
console.log("post is ready");
});
app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
});   