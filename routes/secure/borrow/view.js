import { Router } from 'express';
let router = Router();

// const dummyBorrow = [
//     {
//         id: '11', claim_date: '2001-12-24', delay_date: '2001-12-24', claim_days: 9,
//         Book: {
//             Title: 'ppp'
//         },
//         User: {
//             username: 'ooo'
//         }
//     }
// ]

import { reviewLend as borrowView } from '../../../database/index.js';
router.get('/', async (req, res, next) => {
    let Borrows = res.locals.Librarian ? await borrowView() : await borrowView(req.session.user.id);
    res.render('list-borrow', { delApi: `${res.locals.ApiBaseUrl}/delete/`, Borrows: Borrows });
})

export default router;