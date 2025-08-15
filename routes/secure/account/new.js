import { Router } from "express";
let router = Router();

router.get('/', (req, res, next) => {
    res.render('form-account', { baseUrl: req.baseUrl });
});

import { createUser } from '../../../database/index.js';
router.post('/', (req, res, next) => {
    let account = formFormat(req.body)
    createUser(account);
    res.redirect(req.baseUrl + req.url);
});

export default router;
/* Rename destructured variable */
function formFormat({ username, password, authority }) {
    if (username && password && (authority == '0' || authority == '1')) return {
        username: username,
        password: password,
        authority: Boolean(Number(authority))
    }
}