const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietsachtacgia', {
    maSach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sach',
        key: 'maSach'
      }
    },
    maTacGia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tacgia',
        key: 'maTacGia'
      }
    }
  }, {
    sequelize,
    tableName: 'chitietsachtacgia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maSach" },
          { name: "maTacGia" },
        ]
      },
      {
        name: "fk_chitietSTG_tacGia",
        using: "BTREE",
        fields: [
          { name: "maTacGia" },
        ]
      },
    ]
  });
};
