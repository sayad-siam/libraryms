import { genre as GenreTable, book as BookTable } from "../../models/index.js"

export default async function (name) {
    return (await GenreTable.findAll({
        where: {
            Genre: name
        },
        include: BookTable
    })).map(g => g.toJSON())
}