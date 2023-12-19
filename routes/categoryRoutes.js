import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createCategoryController,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController } from "../controller/categoryController.js";
// import router from './authRoutes';

const router = express.Router();

//routes

//create category routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category routes
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
