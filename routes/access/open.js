import { Router } from "express";
let router = Router();

import { verifyUser as validateUser } from '../../database/index.js';

router.get('/', (req, res, next) => {
    if (req.session.user) res.render('form-access-close', {
        username: req.session.user.username, role: req.session.user.authority ? "Librarian" : "Member"
    }); else res.render('form-access-open', {
        "auth-url": "/access/open"
    });
});

router.post('/', async (req, res, next) => {
    let user = await validateUser(req.body.username, req.body.password);
    if (user.error) res.render('error', { message: user.error })
    else {
        req.session.user = user;
        res.redirect('open');
    }
});

export default router;