import { Router } from 'express';
let router = Router();

// import { borrowEntry, listMember, findBookProjectionsById } from '../../../collection/index.js';
import { reviewBook, reviewUser as listMember, createLend as borrowEntry } from '../../../database/index.js';

router.get('/:bookid', async (req, res, next) => {
    let book = await reviewBook(req.params.bookid),
        members = await listMember(true)
    res.render('form-borrow', { Title: book.Title, members: members });
})

router.post('/:bookid', async (req, res, next) => {
    borrowEntry(
        req.body.userid,
        req.params.bookid,
        req.body.claim_days
    )//.then(console.log)
    res.redirect(res.locals.ApiBaseUrl + '/view');
})

export default router;