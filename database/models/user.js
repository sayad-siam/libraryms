import sequelize from "../main.js";
import { DataTypes } from "sequelize";
import { createHash } from 'crypto';

let user = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    authority: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('password', this.hashing(value));
        }
    },
}, { timestamps: false });

user.prototype.hashing = function hashing(password) {
    const salt = 'SECRET';
    return createHash("sha256").update(salt + password, "binary").digest("base64");
}

export default user;