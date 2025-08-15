import BookModel from './book.js'
import UserModel from './user.js'
import LendModel from './lend.js'
import GenreModel from './genre.js'

import sequelize from '../main.js'

UserModel.hasMany(LendModel)
LendModel.belongsTo(UserModel, { foreignKey: 'UserId' });

BookModel.hasMany(LendModel)
LendModel.belongsTo(BookModel, { foreignKey: 'BookId' });

export let BookGenre = sequelize.define('BookGenre', {}, { timestamps: false });

BookModel.belongsToMany(GenreModel, { through: BookGenre })
GenreModel.belongsToMany(BookModel, { through: BookGenre })

// create tables if not exist
await BookModel.sync()
await UserModel.sync()
await LendModel.sync()
await GenreModel.sync()
await BookGenre.sync()

export default async function initialize() {
    await UserModel.sync()
    await UserModel.findOrCreate({
        where: { authority: true },
        defaults: {
            username: "admin",
            password: "admin",
            authority: true
        }
    });
}

export let user = UserModel;
export let book = BookModel;
export let lend = LendModel;
export let genre = GenreModel;