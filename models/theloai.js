const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('theloai', {
    maTheLoai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenTheLoai: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'theloai',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maTheLoai" },
        ]
      },
    ]
  });
};
