import { Router } from "express";
let router = Router();

router.get('/*', (req,res,next)=>{
    res.render('error', {
        message : 'Not Implemented',
        error : {
            status : 501,
            stack : 'NotImplementedError: Not Implemented'
        }
    });
})

export default router;