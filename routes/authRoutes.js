import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controller/authController.js";
import {  requireSignIn , isAdmin} from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

//routing

//register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//test route
router.get("/test",requireSignIn, isAdmin, testController);

//producted user routes
router.get('/user-auth', requireSignIn, (req,res)=>{
  res.status(200).send({ok: true});
})

//producted admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req,res)=>{
  res.status(200).send({ok: true});
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;
