import { user as userModel } from "../../models/index.js";

const attributes = Object.keys(userModel.getAttributes()).filter(attr => attr != 'password')
const member_filter = { authority: 0 }

export default async function (MEMBER_ONLY = false) {
    let result = MEMBER_ONLY ? await userModel.findAll({
        where: member_filter, attributes: attributes
    }) : await userModel.findAll({ attributes: attributes });
    return result;
}