import { Router } from "express";
let router = Router();

import { removeBook, countLend } from "../../../database/index.js";
router.get('/:bookid', async (req, res, next) => {
    let count = await countLend({BookId:req.params.bookid})
    if (count == 0) {
        removeBook(req.params.bookid);
        res.redirect('/');
    } else { res.render('error', { message: "Clear the book's associated lends first" }) }
})

export default router;