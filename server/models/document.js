'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  document.init({
    namafile: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "namafile can't be empty."
        }
      }
    },
    jenis: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "jenis can't be empty."
        }
      }
    },
    ukuran: DataTypes.INTEGER,
    spmId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'document',
  });
  return document;
};