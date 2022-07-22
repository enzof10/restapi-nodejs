import { getConnection} from "../database/database";

const getLanguages = (req, res) => {
    const languages = [
        {
            id: 1,
            name: "English"
        },
        {
            id: 2,
            name: "Spanish"
        },
        {
            id: 3,
            name: "French"
        }
    ];
  return languages
};

export default getLanguages;