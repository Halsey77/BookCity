const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitiethoadon', {
    maHoaDon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hoadon',
        key: 'maHoaDon'
      }
    },
    maSach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'chitiethoadon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maHoaDon" },
          { name: "maSach" },
        ]
      },
      {
        name: "fk_chiTietHoaDon_sach",
        using: "BTREE",
        fields: [
          { name: "maSach" },
        ]
      },
    ]
  });
};
