'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    namalengkap: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "namalengkap can't be empty."
        }
      }
    },
    NIP: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "NIP can't be empty."
        }
      }
    },
    handphone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "handphone can't be empty."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "pwd can't be empty."
        }
      }
    },
    unitkerja: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "unitkerja can't be empty."
        }
      }
    },
    kewenangan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "kewenangan can't be empty."
        }
      }
    },
    akun: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "akun can't be empty."
        }
      }
    },
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};