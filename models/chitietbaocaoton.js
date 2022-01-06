const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietbaocaoton', {
    maBaoCao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'baocaoton',
        key: 'maBaoCao'
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
    soLuongTonDau: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soLuongTonCuoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chitietbaocaoton',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maBaoCao" },
          { name: "maSach" },
        ]
      },
      {
        name: "fk_chitietBCT_sach",
        using: "BTREE",
        fields: [
          { name: "maSach" },
        ]
      },
    ]
  });
};
