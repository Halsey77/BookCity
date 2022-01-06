const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sach', {
    maSach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenSach: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    anhBia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soLuongTon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    donGia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    biXoa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maSach" },
        ]
      },
    ]
  });
};
