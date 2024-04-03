import express from 'express'
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js';
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



export default router;