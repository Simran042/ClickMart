import express from 'express'
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router= express.Router();
router.post('/register', registerController)
router.post('/forgot-password', forgotPasswordController);
router.post('/login', loginController)
router.get('/user-auth', requireSignIn, (req, res) => {
    console.log("OKAY");
    res.status(200).send({ ok: true });
  });
router.get('/test', requireSignIn, isAdmin, testController);

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  console.log("OKAY");
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;