import { lend as lendModel, book as bookModel, user as userModel } from '../../models/index.js'

const attributes = Object.keys(userModel.getAttributes()).filter(attr => attr != 'password')

export async function countLend({BookId, UserId}) {
    let filter;
    if(BookId) filter = { where: { BookId: BookId } }
    if(UserId) filter = { where: { UserId: UserId } }
    return await lendModel.count(filter)
}

export default async function (UserId) {
    let filter = {
        include: [
            { model: bookModel, attributes: ['Title'] },
            { model: userModel, attributes: ['username'] }
        ]
    };
    if (UserId) filter.where = { UserId: UserId }

    let borrowView = await lendModel.findAll(filter)
    let prettyView = borrowView.map(reformat)

    return prettyView;
}

function reformat(lend) {
    const { id, claim_date, claim_days, Book, User } = lend
    return {
        id: id,
        claim_date: claim_date,
        claim_days: claim_days,
        delay_date: lend.expire_date(),
        delay_days: lend.delay_days(),
        fine_amount: Number(lend.delay_days()) * 10,
        Title: Book.dataValues.Title,
        username: User.dataValues.username
    }
}