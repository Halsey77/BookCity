const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieunhapsach', {
    maPhieuNhap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ngayNhapKho: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ngayTaoPhieuNhap: {
      type: DataTypes.DATEONLY,
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
    tableName: 'phieunhapsach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maPhieuNhap" },
        ]
      },
      {
        name: "fk_phieuNhapSach_taiKhoan",
        using: "BTREE",
        fields: [
          { name: "maTaiKhoan" },
        ]
      },
    ]
  });
};
