import { Router } from 'express';
let router = Router();

import { reviewBook as bookCollection } from '../database/index.js';

/* GET home page. */
router.get('/', async function (req, res, next) {
  let booklist = await bookCollection();
  res.render('index', { books: booklist });
});

/* open access router */
import accessRouter from './access/index.js';
router.use('/access', accessRouter);

import bookRouter from './book/index.js';
router.use('/book', bookRouter);

/* secure access router */
import secureRouter from './secure/index.js';
router.use('/s', secureRouter);

export default router;
