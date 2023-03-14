import express from 'express';
import { register, login, checkPhoneTonTai, doiMatKhau } from "../../controller/userController";


var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'World111' });
});

router.post('/register', register);
router.post("/login", login);
router.post("/checkPhoneTonTai", checkPhoneTonTai);
router.post("/doiMatKhau", doiMatKhau);

export default router;


