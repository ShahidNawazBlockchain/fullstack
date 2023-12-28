import { List } from "../models/list.model.js";

// Create a new list item
const createList = async (req, res) => {
  try {
    const { title, description, priority, isImportant, isCompleted } = req.body;
    const userId = req.user._id; // Assuming you have user information in the request (e.g., from authentication middleware)

    const newList = new List({
      title,
      description,
      priority,
      isImportant,
      isCompleted,
      user: userId,
    });

    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all tasks for the authenticated user
const getAllLists = async (req, res) => {
  try {
    const userId = req.user._id;

    const lists = await List.find({ user: userId });
    res.json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a task for the authenticated user
const updateList = async (req, res) => {
  try {
    const listId = req.params.id;
    const userId = req.user._id;

    const updatedList = await List.findOneAndUpdate(
      { _id: listId, user: userId },
      { $set: req.body },
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ error: "List item not found" });
    }

    res.json(updatedList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a task for the authenticated user
const deleteList = async (req, res) => {
  try {
    const listId = req.params.id;
    const userId = req.user._id;

    const deletedList = await List.findOneAndDelete({
      _id: listId,
      user: userId,
    });

    if (!deletedList) {
      return res.status(404).json({ error: "List item not found" });
    }

    res.json(deletedList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createList, getAllLists, updateList, deleteList };
