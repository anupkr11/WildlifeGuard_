import blogdata from "../models/blogData.js";

export const getBlogData = async (req, res) => {
        const data = await blogdata.find({});
        res.json(data);
};