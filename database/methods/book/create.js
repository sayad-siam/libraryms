import { genre as genreModel, book as bookModel } from '../../models/index.js'

export default async function create({ Title, Author, Image, Genres, Publisher, Publication_date, Pages, ISBN13 }) {
    let result = bookModel.build({
        Title: Title,
        Author: Author,
        Image: Image,
        Author: Author,
        Publisher: Publisher,
        Publication_date: Publication_date,
        Pages: Pages,
        ISBN13: ISBN13
    }, {
        include: genreModel
    })
    result.save()

    for (let Genre of Genres) {
        let genreRow = (await genreModel.findOrBuild({ where: { Genre: Genre } }))[0]
        genreRow.addBook(result)
        genreRow.save()
    }
    return result
}
