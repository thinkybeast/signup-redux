import { Router } from "express";
import createAccount from "../controllers";

const router = Router();

router.post("/accounts", createAccount);

export default router;
