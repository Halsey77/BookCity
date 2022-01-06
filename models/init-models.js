var DataTypes = require("sequelize").DataTypes;
var _baocaocongno = require("./baocaocongno");
var _baocaoton = require("./baocaoton");
var _chitietbaocaocongno = require("./chitietbaocaocongno");
var _chitietbaocaoton = require("./chitietbaocaoton");
var _chitiethoadon = require("./chitiethoadon");
var _chitietphieunhapsach = require("./chitietphieunhapsach");
var _chitietsachtacgia = require("./chitietsachtacgia");
var _chitietsachtheloai = require("./chitietsachtheloai");
var _hoadon = require("./hoadon");
var _khachhang = require("./khachhang");
var _phanquyen = require("./phanquyen");
var _phieunhapsach = require("./phieunhapsach");
var _phieuthutien = require("./phieuthutien");
var _sach = require("./sach");
var _tacgia = require("./tacgia");
var _taikhoan = require("./taikhoan");
var _theloai = require("./theloai");

function initModels(sequelize) {
  var baocaocongno = _baocaocongno(sequelize, DataTypes);
  var baocaoton = _baocaoton(sequelize, DataTypes);
  var chitietbaocaocongno = _chitietbaocaocongno(sequelize, DataTypes);
  var chitietbaocaoton = _chitietbaocaoton(sequelize, DataTypes);
  var chitiethoadon = _chitiethoadon(sequelize, DataTypes);
  var chitietphieunhapsach = _chitietphieunhapsach(sequelize, DataTypes);
  var chitietsachtacgia = _chitietsachtacgia(sequelize, DataTypes);
  var chitietsachtheloai = _chitietsachtheloai(sequelize, DataTypes);
  var hoadon = _hoadon(sequelize, DataTypes);
  var khachhang = _khachhang(sequelize, DataTypes);
  var phanquyen = _phanquyen(sequelize, DataTypes);
  var phieunhapsach = _phieunhapsach(sequelize, DataTypes);
  var phieuthutien = _phieuthutien(sequelize, DataTypes);
  var sach = _sach(sequelize, DataTypes);
  var tacgia = _tacgia(sequelize, DataTypes);
  var taikhoan = _taikhoan(sequelize, DataTypes);
  var theloai = _theloai(sequelize, DataTypes);

  baocaocongno.belongsToMany(khachhang, { as: 'maKhachHang_khachhangs', through: chitietbaocaocongno, foreignKey: "maBaoCao", otherKey: "maKhachHang" });
  baocaoton.belongsToMany(sach, { as: 'maSach_saches', through: chitietbaocaoton, foreignKey: "maBaoCao", otherKey: "maSach" });
  hoadon.belongsToMany(sach, { as: 'maSach_sach_chitiethoadons', through: chitiethoadon, foreignKey: "maHoaDon", otherKey: "maSach" });
  khachhang.belongsToMany(baocaocongno, { as: 'maBaoCao_baocaocongnos', through: chitietbaocaocongno, foreignKey: "maKhachHang", otherKey: "maBaoCao" });
  sach.belongsToMany(baocaoton, { as: 'maBaoCao_baocaotons', through: chitietbaocaoton, foreignKey: "maSach", otherKey: "maBaoCao" });
  sach.belongsToMany(hoadon, { as: 'maHoaDon_hoadons', through: chitiethoadon, foreignKey: "maSach", otherKey: "maHoaDon" });
  sach.belongsToMany(tacgia, { as: 'maTacGia_tacgia', through: chitietsachtacgia, foreignKey: "maSach", otherKey: "maTacGia" });
  sach.belongsToMany(theloai, { as: 'maTheLoai_theloais', through: chitietsachtheloai, foreignKey: "maSach", otherKey: "maTheLoai" });
  tacgia.belongsToMany(sach, { as: 'maSach_sach_chitietsachtacgia', through: chitietsachtacgia, foreignKey: "maTacGia", otherKey: "maSach" });
  theloai.belongsToMany(sach, { as: 'maSach_sach_chitietsachtheloais', through: chitietsachtheloai, foreignKey: "maTheLoai", otherKey: "maSach" });
  chitietbaocaocongno.belongsTo(baocaocongno, { as: "maBaoCao_baocaocongno", foreignKey: "maBaoCao"});
  baocaocongno.hasMany(chitietbaocaocongno, { as: "chitietbaocaocongnos", foreignKey: "maBaoCao"});
  chitietbaocaoton.belongsTo(baocaoton, { as: "maBaoCao_baocaoton", foreignKey: "maBaoCao"});
  baocaoton.hasMany(chitietbaocaoton, { as: "chitietbaocaotons", foreignKey: "maBaoCao"});
  chitiethoadon.belongsTo(hoadon, { as: "maHoaDon_hoadon", foreignKey: "maHoaDon"});
  hoadon.hasMany(chitiethoadon, { as: "chitiethoadons", foreignKey: "maHoaDon"});
  chitietbaocaocongno.belongsTo(khachhang, { as: "maKhachHang_khachhang", foreignKey: "maKhachHang"});
  khachhang.hasMany(chitietbaocaocongno, { as: "chitietbaocaocongnos", foreignKey: "maKhachHang"});
  hoadon.belongsTo(khachhang, { as: "maKhachHang_khachhang", foreignKey: "maKhachHang"});
  khachhang.hasMany(hoadon, { as: "hoadons", foreignKey: "maKhachHang"});
  phieuthutien.belongsTo(khachhang, { as: "maKhachHang_khachhang", foreignKey: "maKhachHang"});
  khachhang.hasMany(phieuthutien, { as: "phieuthutiens", foreignKey: "maKhachHang"});
  taikhoan.belongsTo(phanquyen, { as: "maPhanQuyen_phanquyen", foreignKey: "maPhanQuyen"});
  phanquyen.hasMany(taikhoan, { as: "taikhoans", foreignKey: "maPhanQuyen"});
  chitietphieunhapsach.belongsTo(phieunhapsach, { as: "maPhieuNhap_phieunhapsach", foreignKey: "maPhieuNhap"});
  phieunhapsach.hasOne(chitietphieunhapsach, { as: "chitietphieunhapsach", foreignKey: "maPhieuNhap"});
  chitietbaocaoton.belongsTo(sach, { as: "maSach_sach", foreignKey: "maSach"});
  sach.hasMany(chitietbaocaoton, { as: "chitietbaocaotons", foreignKey: "maSach"});
  chitiethoadon.belongsTo(sach, { as: "maSach_sach", foreignKey: "maSach"});
  sach.hasMany(chitiethoadon, { as: "chitiethoadons", foreignKey: "maSach"});
  chitietphieunhapsach.belongsTo(sach, { as: "maSach_sach", foreignKey: "maSach"});
  sach.hasMany(chitietphieunhapsach, { as: "chitietphieunhapsaches", foreignKey: "maSach"});
  chitietsachtacgia.belongsTo(sach, { as: "maSach_sach", foreignKey: "maSach"});
  sach.hasMany(chitietsachtacgia, { as: "chitietsachtacgia", foreignKey: "maSach"});
  chitietsachtheloai.belongsTo(sach, { as: "maSach_sach", foreignKey: "maSach"});
  sach.hasMany(chitietsachtheloai, { as: "chitietsachtheloais", foreignKey: "maSach"});
  chitietsachtacgia.belongsTo(tacgia, { as: "maTacGia_tacgium", foreignKey: "maTacGia"});
  tacgia.hasMany(chitietsachtacgia, { as: "chitietsachtacgia", foreignKey: "maTacGia"});
  phieunhapsach.belongsTo(taikhoan, { as: "maTaiKhoan_taikhoan", foreignKey: "maTaiKhoan"});
  taikhoan.hasMany(phieunhapsach, { as: "phieunhapsaches", foreignKey: "maTaiKhoan"});
  phieuthutien.belongsTo(taikhoan, { as: "maTaiKhoan_taikhoan", foreignKey: "maTaiKhoan"});
  taikhoan.hasMany(phieuthutien, { as: "phieuthutiens", foreignKey: "maTaiKhoan"});
  chitietsachtheloai.belongsTo(theloai, { as: "maTheLoai_theloai", foreignKey: "maTheLoai"});
  theloai.hasMany(chitietsachtheloai, { as: "chitietsachtheloais", foreignKey: "maTheLoai"});

  return {
    baocaocongno,
    baocaoton,
    chitietbaocaocongno,
    chitietbaocaoton,
    chitiethoadon,
    chitietphieunhapsach,
    chitietsachtacgia,
    chitietsachtheloai,
    hoadon,
    khachhang,
    phanquyen,
    phieunhapsach,
    phieuthutien,
    sach,
    tacgia,
    taikhoan,
    theloai,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
