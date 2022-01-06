const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hoadon', {
    maHoaDon: {
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
    ngayLapHoaDon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    thanhTien: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    soTienThucTra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maTaiKhoan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoadon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maHoaDon" },
        ]
      },
      {
        name: "fk_hoaDon_khachHang",
        using: "BTREE",
        fields: [
          { name: "maKhachHang" },
        ]
      },
    ]
  });
};
