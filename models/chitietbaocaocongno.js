const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietbaocaocongno', {
    maBaoCao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'baocaocongno',
        key: 'maBaoCao'
      }
    },
    maKhachHang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'khachhang',
        key: 'maKhachHang'
      }
    },
    soNoDau: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soNoCuoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chitietbaocaocongno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maBaoCao" },
          { name: "maKhachHang" },
        ]
      },
      {
        name: "fk_chitietBCCN_maKhachHang",
        using: "BTREE",
        fields: [
          { name: "maKhachHang" },
        ]
      },
    ]
  });
};
