const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phanquyen', {
    maPhanQuyen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenPhanQuyen: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phanquyen',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maPhanQuyen" },
        ]
      },
    ]
  });
};
