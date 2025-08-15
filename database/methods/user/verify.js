import { user as userModel } from "../../models/index.js";

export default async function (username, password) {
    let user = await userModel.findOne({
        where: {
            username: username
        }
    });
    if (user) {
        if (user.hashing(password) == user.password) return user;
        else return { error: "WRONG PASSWORD" }
    } else return { error: "WRONG USERNAME" }
}