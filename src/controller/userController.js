import User from "../models/userModel";
import bcrypt from "bcrypt";
// < Đăng ký tài khoản > //
module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password, phone } = req.body;
        const usernameCheck = await User.findOne({ username });
        const phoneCheck = await User.findOne({ phone });
        if (phoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
        if (usernameCheck)
            return res.json({ msg: "Username already used", status: false });
        const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            phone,
            email,
            username,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
// < Đăng nhập tài khoản > //

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user)
            return res.json({ msg: "Incorrect username or password", status: false });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.json({ msg: "Incorrect username or password", status: false });
        delete user.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
// < Kiểm tra số điện thoại > //
module.exports.checkPhoneTonTai = async (req, res, next) => {
    try {
        const { phone } = req.body;
        console.log("số điện thoại: ", phone);
        const phoneCheck = await User.findOne({ phone });
        if (phoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
    } catch (error) {
        next(error);
    }
    return res.json({ msg: "Phone Hợp lệ", status: true });
};
// <  Đổi mật khẩu ( forgotpassword ) > //

module.exports.doiMatKhau = async (req, res) => {
    const { phone, newpassword } = req.body;

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    const user = await User.findOne({ phone });
    const usersauKhiDoiMatKhau = await User.findByIdAndUpdate(
        { _id: user._id },
        { password: hashedPassword },
        { new: true }
    );

    return res.json({ status: true, data: usersauKhiDoiMatKhau });
};