import { book as bookModel } from '../../models/index.js'
import { default as genreModel } from '../../models/genre.js'

// Filter by writer
export default async function (filter) {
    return (await bookModel.findAll(filter)).map(book => book.toJSON());
}

export function writerFilter(writer) {
    return { where: { Author: writer } }
}

export function publisherFilter(publisher) {
    return { where: { Publisher: publisher }}
}