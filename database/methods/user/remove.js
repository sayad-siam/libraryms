import { user as userModel } from "../../models/index.js";

export default async function (userId) {
    try {
        let user = await userModel.findByPk(userId);
        let result = await user.destroy();
        return result;
    } catch (error) {
        return error;
    }
}