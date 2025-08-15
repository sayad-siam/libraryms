import { Router } from "express";
let router = Router();
import { reviewUser } from "../../../database/index.js";
router.get('/', async (req, res, next) => {
    let Users = await reviewUser()
    res.render('list-account', { Users: Users, deleteAccountApi: res.locals.deleteAccountApi })
});

export default router;