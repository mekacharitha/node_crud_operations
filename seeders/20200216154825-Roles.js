'use strict';

const models = require('../models/index');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return models.Roles.bulkCreate([
    {
      roles: 'admin'
    },
    {
      roles: 'softwareDeveloper'
    },
    {
      roles: 'intern'
    },
    {
      roles: 'qualityAdministrator'
    },
    {
      roles: 'designAnalyser'
    }

  ], {
    id: {
      autoIncrement: true
    }
  })

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Roles')
  }
};
