import sequelize from "../main.js";
import { DataTypes } from "sequelize";

let book = sequelize.define("Book", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    Title: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    Author: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Image: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    Publisher: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Publication_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Pages: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ISBN13: {
        type: DataTypes.CHAR(13),
        allowNull: false,
        unique: true
    }
}, { timestamps: false });

export default book;