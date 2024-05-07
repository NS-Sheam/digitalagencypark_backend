import { blogServices } from "./blog.service";


const createBlog = async (req, res) => {
  try {
    const { card: cardData } = req.body;
    const result = await blogServices.createBlogInDB(req.file, cardData);
    res.status(200).json({
      success: true,
      message: "card is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const result = await blogServices.getAllBlogFromDB();

    res.status(200).json({
      success: true,
      message: "cards are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const blogsController = {
  createBlog,
  getAllBlogs,
};
