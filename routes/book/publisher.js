import { Router } from 'express';
let router = Router();

import { filterBook, publisherFilter } from '../../database/index.js';

/* GET home page. */
router.get('/:publisher', async function (req, res, next) {
  let booklist = await filterBook(publisherFilter(req.params.publisher));
  res.render('index', { books: booklist });
});

export default router;