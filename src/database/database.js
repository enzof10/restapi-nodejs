import mysql from "promise-mysql";
import config from "../config";
console.log("config: ", config);

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.username,
  password: config.password,
  port: config.port,
});


const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
