const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietphieunhapsach', {
    maPhieuNhap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phieunhapsach',
        key: 'maPhieuNhap'
      }
    },
    maSach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sach',
        key: 'maSach'
      }
    },
    soLuong: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chitietphieunhapsach',
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
        name: "fk_chiTietPNS_sach",
        using: "BTREE",
        fields: [
          { name: "maSach" },
        ]
      },
    ]
  });
};
