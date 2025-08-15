import sequelize from "../main.js";
import { DataTypes } from "sequelize";

let genre = sequelize.define("Genre", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    Genre: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, { timestamps: false });

export default genre;

/* 
In index.js : build the relations
------------
1) between Genre and book "through" intermediate Table BookGenre (id and relations only)
2) between Lend and Book "through" intermediate Table LendBook (id and relations only)
3) between User and Lend "through" intermediate Table UserBook (id and relations only)
*/