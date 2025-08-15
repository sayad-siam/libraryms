import { Router } from "express";
let router = Router();

router.get('/', (req, res, next) => {
    res.redirect('open')
})

import openRouter from './open.js';
router.use('/open', openRouter);

import closeRouter from './close.js';
router.use('/close', closeRouter);

export default router;