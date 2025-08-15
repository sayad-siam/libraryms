import { lend as lendModel } from '../../models/index.js'

export default async function (lendId) {
    try {
        let lend = await lendModel.findByPk(lendId);
        let result = await lend.destroy();
        return result;
    } catch (error) {
        return error;
    }
}