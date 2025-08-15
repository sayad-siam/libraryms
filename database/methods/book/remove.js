import { book as bookModel } from '../../models/index.js'

export default async function (bookId) {
    try {
        let book = await bookModel.findByPk(bookId);
        let result = await book.destroy();
        return result;
    } catch (error) {
        return error;
    }
}