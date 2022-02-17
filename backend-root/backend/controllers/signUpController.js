const asyncHandler = require("express-async-handler");

const user = require("../models/userModel");
//@desc GET Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc SET Goals
//@route SET /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Bad request" });
    req.status(400);

    throw new Error("Bad REquest");
  }
  res.status(200).json({ message: "set Goals" });
});

//@desc UPDATE Goals
//@route UPDATE /api/goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update Goals" });
});
//@desc DELETE Goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete Goals" });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
