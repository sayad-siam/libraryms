import { Router } from 'express';
let router = Router();

import { reviewBook as findBookById } from '../../database/index.js';

/* GET books listing. */
router.get('/:bookid', async function (req, res, next) {
  let book_details = await findBookById(req.params.bookid);
  res.render('book', book_details);
});

export default router;