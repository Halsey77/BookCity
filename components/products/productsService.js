const {models} = require('../../models/index');
const sach = models.sach;
const { Op } = require("sequelize");

exports.list = (page = 0, itemPerPage = 9) => {
    return sach.findAll({
        offset: page * itemPerPage,
        limit: itemPerPage,
        raw: true
    });
}

exports.showDetail = (ID) => {
    return sach.findOne({
        where: {maSach: ID},
        raw: true
    });
}