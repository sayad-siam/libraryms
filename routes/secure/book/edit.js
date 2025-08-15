import { Router } from "express";
let router = Router();

import { reviewBook as findBookById, updateBook as editBookById } from '../../../database/index.js';

router.get('/:bookid', async (req, res, next) => {
    let baseUrl = req.baseUrl + req.url;
    let { Title, Author, Genres, Publisher, Publication_date, Pages, ISBN13 } = await findBookById(req.params.bookid)
    let Genre = Genres.map(detail => detail.Genre).join(', ')
    res.render('form-book', { baseUrl: baseUrl, Title: Title, Author: Author, Genre: Genre, Publisher: Publisher, Publication_date: Publication_date, Pages: Pages, ISBN13: ISBN13 });
});


import { formReformat, ImageUpload } from './utils.js'

router.post('/:bookid', ImageUpload, async (req, res, next) => {
    let result = await editBookById(req.params.bookid, formReformat(req.body, req.file));
    res.redirect('/book/view/' + req.params.bookid);
});

export default router;