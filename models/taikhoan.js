const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taikhoan', {
    maTaiKhoan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maPhanQuyen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'phanquyen',
        key: 'maPhanQuyen'
      }
    },
    hoVaTen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    biXoa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taikhoan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maTaiKhoan" },
        ]
      },
      {
        name: "fk_taiKhoan_phanQuyen",
        using: "BTREE",
        fields: [
          { name: "maPhanQuyen" },
        ]
      },
    ]
  });
};
