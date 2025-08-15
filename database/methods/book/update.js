import { genre as genreModel, book as bookModel } from '../../models/index.js'

export default async function update(id, attr) {
    let result = await bookModel.findByPk(id);
    for (const [key, val] of Object.entries(attr)) {
        if (key != 'Genres' || val.length == 0) {
            result[key] = val;
        }
    }
    if (attr.Genres) {
        let genreRow;
        for (const Genre of attr.Genres) {
            genreRow = (await genreModel.findOrBuild({ where: { Genre: Genre } }))[0];
            genreRow.addBook(result);
            genreRow.save()
        }
    }
    result.save()
    return result;
}