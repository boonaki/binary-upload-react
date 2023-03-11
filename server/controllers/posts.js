const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const { ObjectId } = require("mongodb");

module.exports = {
    getProfile: async (req, res) => {
        try {
            
            const posts = await Post.find({ user: req.user.id });
            res.send({userName: req.user.userName, email: req.user.email, posts: posts})
        } catch (err) {
            console.log(err);
        }
    },
    getFeed: async (req, res) => {
        try {
            const posts = await Post.find().sort({ createdAt: "desc" }).lean();
            res.send({posts: posts})
            // res.render("feed.ejs", { posts: posts });
        } catch (err) {
            console.log(err);
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findById(ObjectId(req.params.id));
            res.send({user: req.user.id, post: post})
            // res.render("post.ejs", { post: post, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    createPost: async (req, res) => {
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Post.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                caption: req.body.caption,
                likes: 0,
                user: req.user.id,
            });
            res.sendStatus(200)
            console.log("Post has been added!");
        } catch (err) {
            console.log(err);
        }
    },
    likePost: async (req, res) => {
        try {
            await Post.findOneAndUpdate(
                { _id: ObjectId(req.params.id) },
                {
                    $inc: { likes: 1 },
                }
            );
            console.log("Likes +1");
        } catch (err) {
            console.log(err);
        }
    },
    deletePost: async (req, res) => {
        try {
            // Find post by id
            let post = await Post.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect("/profile");
        } catch (err) {
            res.redirect("/profile");
        }
    },
};
