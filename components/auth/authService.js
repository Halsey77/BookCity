const bcrypt = require('bcrypt');
const {models} = require('../../models');
const taikhoan = models.taikhoan;

exports.Register = async (firstName, lastName, email, password) => {
    //check if email is registed
    const Account = await taikhoan.findOne({where: {EMAIL: email}});
    if(Account) {
        throw new Error('Email is already registed');
    }
    const hashPass = await bcrypt.hash(password, 10);
    const NewID = await taikhoan.count() + 1;

    //create new account
    return taikhoan.create({maTaiKhoan: NewID,
                    hoVaTen: lastName + firstName,
                    email: email,
                    matKhau: hashPass});
};
