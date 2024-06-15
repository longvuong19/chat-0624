import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // Find all users excepts the logged in user
    const filterUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filterUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
    console.log("Can not get users for Sidebar", error.message);
  }
};
