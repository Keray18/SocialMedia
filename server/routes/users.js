import express from 'express';
import { getUser,getUserFrnds,addRemoveFrnd } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/:frnds", verifyToken, getUserFrnds);

/* UPDATE */
router.patch("/:id/frndId", verifyToken, addRemoveFrnd);

export default router;