import { Router } from "express";
let router = Router();

/* gate-keeper middleware for secure route */
router.use((req, res, next) => {
    if (req.session.user) next();
    else res.redirect('/access/open');
})

import bookRouter from './book/index.js';
router.use('/book', bookRouter);

import accountRouter from './account/index.js';
router.use('/account', accountRouter);

import borrowRouter from './borrow/index.js';
router.use('/borrow', borrowRouter);

import fineRouter from './fine/index.js';
router.use('/fine', fineRouter);

export default router;