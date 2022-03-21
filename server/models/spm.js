'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spm.init({
    nomorspm: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "nomorspm can't be empty."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'spm',
  });
  return spm;
};