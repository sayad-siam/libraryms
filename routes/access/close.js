import { Router } from "express";
let router = Router();

router.get('/', (req, res, next) => {
    if(req.session.user)req.session.destroy();
    res.redirect('open');
})

export default router;