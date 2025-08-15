import { Router } from 'express';
import { removeLend } from '../../../database/index.js';
let router = Router();

router.get('/:borrowid', (req,res,next)=>{
    removeLend(req.params.borrowid);
    res.redirect(res.locals.ApiBaseUrl + '/view');
});

export default router;