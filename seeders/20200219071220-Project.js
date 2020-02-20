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
   return models.Project.bulkCreate([
    {
      name: 'Ocr'
    },
    {
      name: 'ChatBot for university related query'
    },
    {
      name: 'Iot for water level sensing'
    },
    {
      name: 'FacRecognition'
    },
    {
      name: 'Market place using blockchain'
    },

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
   return queryInterface.bulkDelete('Project');
  }
};
