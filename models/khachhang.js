const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khachhang', {
    maKhachHang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hoTen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soTienNo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    diaChi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    biXoa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'khachhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maKhachHang" },
        ]
      },
    ]
  });
};
