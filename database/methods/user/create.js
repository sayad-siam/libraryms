import { user as userModel } from "../../models/index.js";

export default async function ({ username, password, authority }) {
    // console.log(
    //     'username:', username, '\n',
    //     'password:', password, '\n',
    //     'authority:', authority, '\n'
    // )
    try {
        let result = await userModel.create({
            username: username,
            password: password,
            authority: authority,
        });
        return result;
    } catch (error) {
        return error;
    }
}