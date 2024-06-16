
import express, { Express, Request, Response } from "express"
import categoriesController from "../../controllers/categories.controller"
const router =  express.Router()

//Get All
router.get("", categoriesController.getAll);

//Get By ID
router.get("/:id", categoriesController.getCategoryById);

//Create category
router.post("", categoriesController.createCategory);

//Update category By ID
router.put("/:id", categoriesController.updateCategory);

//Delete category By ID
router.delete("/:id", categoriesController.deleteCategory);


export default router