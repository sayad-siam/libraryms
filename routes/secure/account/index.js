import { Router } from "express";
let router = Router();

router.use((req, res, next) => {
    res.locals.deleteAccountApi = req.baseUrl + '/delete/';
    res.locals.createAccountApi = req.baseUrl + '/new';
    res.locals.reviewAccountApi = req.baseUrl + '/view'
    next();
})

import viewRouter from './view.js';
router.use('/view', viewRouter);

import newRouter from './new.js';
router.use('/new', newRouter);

// import editRouter from './edit.js';
// router.use('/edit', editRouter);

import deleteRouter from './delete.js';
router.use('/delete', deleteRouter);

export default router;