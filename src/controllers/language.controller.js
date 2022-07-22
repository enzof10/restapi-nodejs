import { getConnection } from "../database/database";

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const languages = await connection.query("SELECT * FROM languages");
    return languages;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting languages",
      error: error.message,
    });
  }
};

const getLanguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const language = await connection.query(
      "SELECT * FROM languages WHERE id = ?",
      [req.params.id]
    );
    return language;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting language",
      error: error.message,
    });
  }
};

const addLanguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const { languageName, content } = req.body;
    if (!languageName || !content) {
      res.status(400).json({
        message: "Language name and content are required",
      });
    }
    const newLanguage = await connection.query(
      "INSERT INTO languages (language_name, content) VALUES (?, ?)",
      [languageName, content]
    );
    return newLanguage;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding language",
      error: error.message,
    });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const language = await connection.query(
      "DELETE FROM languages WHERE id = ?",
      [req.params.id]
    );
    return language;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error deleting language",
      error: error.message,
    });
  }
};

export { getLanguages, addLanguage, getLanguage, deleteLanguage };
