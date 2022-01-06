const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietsachtheloai', {
    maSach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sach',
        key: 'maSach'
      }
    },
    maTheLoai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'theloai',
        key: 'maTheLoai'
      }
    }
  }, {
    sequelize,
    tableName: 'chitietsachtheloai',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maSach" },
          { name: "maTheLoai" },
        ]
      },
      {
        name: "fk_chiTietSTT_theLoai",
        using: "BTREE",
        fields: [
          { name: "maTheLoai" },
        ]
      },
    ]
  });
};
