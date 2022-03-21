'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namalengkap: {
        type: Sequelize.STRING
      },
      NIP: {
        type: Sequelize.STRING
      },
      handphone: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      unitkerja: {
        type: Sequelize.STRING
      },
      kewenangan: {
        type: Sequelize.STRING
      },
      akun: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};