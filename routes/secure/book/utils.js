// import { tmpdir } from 'os';
import multer from 'multer';
let Upload = multer({
    // dest : tmpdir()
    dest: './public/images'
});

export let ImageUpload = Upload.single('Image');

export function formReformat({Title, Genre, Author, Publisher, Publication_date, Pages, ISBN13}, ImageFile) {
    let data = {};
    if(ImageFile) data.Image = ImageFile.filename;
    if(Title.length) data.Title = Title;
    if(Author.length) data.Author = Author;
    if(Publisher.length) data.Publisher = Publisher;
    if(Publication_date.length) data.Publication_date = Publication_date;
    if(Pages.length) data.Pages = Pages;
    if(ISBN13.length) data.ISBN13 = ISBN13;
    /* https://stackoverflow.com/questions/58545830/mongodb-array-turned-into-string-on-database */
    if(Genre.length) data.Genres = Genre.split(',').map(c=>c.replace(/\s+/g,' ').trim());
    // if(Genre.length) data.Genre = Genre;
    return data;
}