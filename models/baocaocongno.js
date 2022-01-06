const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baocaocongno', {
    maBaoCao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    thang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nam: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'baocaocongno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maBaoCao" },
        ]
      },
    ]
  });
};
