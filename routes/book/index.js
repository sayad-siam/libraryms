import { Router } from "express";
let router = Router();

import viewRouter from './view.js';
router.use('/view', viewRouter);

import genreRouter from './genre.js'
router.use('/genre', genreRouter)

import writerRouter from './writer.js'
router.use('/author', writerRouter)

import publisherRouter from './publisher.js'
router.use('/publisher', publisherRouter)

export default router;