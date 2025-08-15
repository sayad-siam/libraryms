import { Router } from 'express'
let router = Router();

import { reviewGenre } from '../../database/index.js'
router.get('/:genreName', async (req, res, next) => {
    let bookList = (await reviewGenre(req.params.genreName))[0].Books
    res.render('index', { books: bookList })
})

export default router;