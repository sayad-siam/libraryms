import { Router } from "express";
let router = Router();

router.get('/', (req, res, next) => {
    res.render('form-book', { baseUrl: req.baseUrl });
});

import { createBook } from '../../../database/index.js';
import { formReformat, ImageUpload } from './utils.js'

router.post('/', ImageUpload, (req, res, next) => {
    let book = formReformat(req.body, req.file);
    createBook(book);
    res.redirect('new');
})

export default router;