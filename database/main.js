import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database", 'username', 'password', {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
});

// const sequelize = new Sequelize("libraryms", "root", "", {
//     dialect: "mariadb",
//     host: "localhost",
//     logging: false,
// });

await sequelize.sync()
export default sequelize;
