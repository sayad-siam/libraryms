import { book as bookModel } from '../../models/index.js'
import { default as genreModel } from '../../models/genre.js'

export default async function (id = undefined) {
    let result = id ? (await bookModel.findByPk(id, { include: genreModel })).toJSON() : (await bookModel.findAll()).map(book => book.toJSON());
    return result;
}