import { Router } from "express";
import   getLanguages from "../controllers/language.controller";

const router = Router();

router.get("/", (req, res) => {
    const languages = getLanguages();
    res.json(languages);
});

export default router;
