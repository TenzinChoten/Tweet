import express from "express";
import {fileURLToPath} from "url";
import {dirname} from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true}));

let posts = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});

app.post("/create", (req, res) => {
   const postContent = req.body.post;
   posts.push(postContent);
   res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    if (postId >= 0 && postId < posts.length) {
        res.render("edit.ejs", {post: posts[postId], id: postId});
    } else {
        res.redirect("/");
    }
});

app.post("/update/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    if (postId >= 0 && postId < posts.length) {
        posts[postId] = req.body.post;
    }
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    if (postId >= 0 && postId < posts.length) {
        posts.splice(postId, 1);
    } res.redirect("/");
})

app.listen(port, () => {
    console.log(`The port ${port} is running`);
});
