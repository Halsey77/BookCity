const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tacgia', {
    maTacGia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenTacGia: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tacgia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maTacGia" },
        ]
      },
    ]
  });
};
