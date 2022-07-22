import { Router } from "express";
import { getLanguages, addLanguage, getLanguage, deleteLanguage } from "../controllers/language.controller";

const router = Router();

router.get("/", async (req, res) => {
  const languages = await getLanguages(req, res);
  const response = {
    status: "success",
    data: languages,
  };
  res.json(response);
});

router.get("/:id", async (req, res) => {
  const language = await getLanguage(req, res);
  const response = {
    status: "success",
    data: language,
  };
  res.json(response);
});

router.post("/", async (req, res) => {
  const language = await addLanguage(req, res);
  const response = {
    status: "success",
    message: "Language added successfully",
    data: language,
  };
  res.json(response);
});


router.delete("/:id", async (req, res) => {
    const deleted = await deleteLanguage(req, res);
    const response = {
        status: "success",
        message: "Language deleted successfully",
        data: deleted,
    };
    res.json(response);
}
);




export default router;
