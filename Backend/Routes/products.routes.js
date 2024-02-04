const express = require("express");
const productRouter = express.Router();
const { Products } = require("../Models/user.models");

// GET all products
productRouter.get("/", async (req, res) => {
  let query = Products.find({});
  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.startsWith("-")
      ? [req.query.sort.substring(1), "desc"]
      : [req.query.sort, "asc"];
    query = query.sort({ [sortBy[0]]: sortBy[1] });
  }

  // Searching with regex
  if (req.query.search) {
    console.log(req.query.search);
    query = query.where({ name: new RegExp(req.query.search, "i") }); // assuming 'name' is the field to search
  }

  try {
    const products = await query.exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving products",
      error: error.message,
    });
  }
});

// GET a single product by ID
productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      // If the product with the given ID was not found
      return res.status(404).send({
        message: "Product not found",
      });
    }
    // Successfully retrieved the product
    res.status(200).send(product);
  } catch (error) {
    if (error.kind === "ObjectId") {
      // If the error is due to an invalid object ID
      return res.status(400).send({
        message: "Invalid product ID",
      });
    }
    // Internal server error
    res.status(500).send({
      message: "Error retrieving product",
      error: error.message,
    });
  }
});

module.exports = productRouter;
