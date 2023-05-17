'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    var comments = await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      product: {
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

    // var reply = await queryInterface.createTable('Replies', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   user: {
    //     type: Sequelize.STRING
    //   },
    //   content: {
    //     type: Sequelize.STRING
    //   },
    //   commentId: {
    //     type: Sequelize.INTEGER
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
    // await queryInterface.dropTable('Replies');
  }
};