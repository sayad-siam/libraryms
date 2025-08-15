import { lend as lendModel } from "../../models/index.js";

export default async function (UserId, BookId, claim_days) {
    // console.log(
    //     'UserId:', UserId, '\n',
    //     'BookId:', BookId, '\n',
    //     'claim_days:', claim_days, '\n'
    // )
    try {
        let result = await lendModel.create({
            UserId: UserId,
            BookId: BookId,
            claim_days: claim_days
        });
        return result;
    } catch (error) {
        return error
    }
}