const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieuthutien', {
    maPhieuThu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maKhachHang: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'khachhang',
        key: 'maKhachHang'
      }
    },
    ngayThuTien: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    soTienThu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maTaiKhoan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taikhoan',
        key: 'maTaiKhoan'
      }
    }
  }, {
    sequelize,
    tableName: 'phieuthutien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maPhieuThu" },
        ]
      },
      {
        name: "fk_phieuThuTien_khachHang",
        using: "BTREE",
        fields: [
          { name: "maKhachHang" },
        ]
      },
      {
        name: "fk_phieuThuTien_taiKhoan",
        using: "BTREE",
        fields: [
          { name: "maTaiKhoan" },
        ]
      },
    ]
  });
};
