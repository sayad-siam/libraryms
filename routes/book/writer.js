import { Router } from 'express';
let router = Router();

import { filterBook, writerFilter } from '../../database/index.js';

/* GET home page. */
router.get('/:writer', async function (req, res, next) {
  let booklist = await filterBook(writerFilter(req.params.writer));
  res.render('index', { books: booklist });
});

export default router;