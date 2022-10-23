import { Sequelize } from "sequelize";

const db = new Sequelize('auth', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
