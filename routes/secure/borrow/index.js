import { Router } from "express";
let router = Router();

router.use((req,res,next)=>{
    res.locals.ApiBaseUrl = req.baseUrl;
    next();
})

import viewRouter from './view.js';
router.use('/view', viewRouter);

import requestRouter from './request.js';
router.use('/request', requestRouter);

import deleteRouter from './delete.js';
router.use('/delete', deleteRouter);

export default router;