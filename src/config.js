import {config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    username: process.env.USERDB  || "",
    password: process.env.PASSWORD || "",
    port : process.env.PORT || "",
}