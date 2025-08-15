import { Router } from "express";
import { removeUser, countLend } from "../../../database/index.js";
let router = Router();

router.get('/:userId', async(req, res, next) => {
    let count = await countLend({ UserId: req.params.userId })
    if (count == 0) {
        removeUser(req.params.userId);
        res.redirect(res.locals.reviewAccountApi)
    } else { res.render('error', { message: "Clear their associated lend first" }) }
})

export default router;