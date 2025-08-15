import sequelize from "../main.js";
import { DataTypes } from "sequelize";

let lend = sequelize.define("Lend", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    claim_days: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    claim_date: {
        type: DataTypes.DATEONLY,
        defaultValue: (DataTypes.NOW),
        get() {
            return this.getDataValue('claim_date').slice(0,10)
        }
    }
}, { timestamps: false })

lend.prototype.expire_date = function() {
    let date = new Date(this.getDataValue('claim_date'))
    date.setDate(date.getDate() + this.getDataValue('claim_days'))
    return date.toISOString().slice(0,10)
}

lend.prototype.delay_days = function () {
    let lend_expire_date = new Date(this.expire_date()),
        lend_settle_date = new Date(Date.now()),
        lend_delay_secs = lend_settle_date.getTime() - lend_expire_date.getTime(),
        lend_delay_days = Math.floor(lend_delay_secs / (1000 * 60 * 60 * 24))
    if (lend_delay_days > 0) return lend_delay_days
    return 0;
}

export default lend;