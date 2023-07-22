'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',
    {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type :Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING
      },
      email:{
        unique:true,
        type:Sequelize.STRING
      },
      senha:{
        type:Sequelize.STRING
      },
      status: {
        type:Sequelize.CHAR(1)
      },
      tipo:{
        type:Sequelize.CHAR(1)
      },
      createdAt: {
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type:Sequelize.DATE
      }
    })
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
