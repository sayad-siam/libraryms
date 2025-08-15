import { Router } from 'express';
let router = Router();

import newRouter from './new.js';
router.use('/new', newRouter);

import editRouter from './edit.js';
router.use('/edit', editRouter);

import deleteRouter from './delete.js';
router.use('/delete', deleteRouter);

export default router;
