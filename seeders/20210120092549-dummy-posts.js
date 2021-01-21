'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'Halo semuanya',
      content: "ini adalah sebuah konten yang sangat berfaedah sekali",
      tags: 'halo,semuanya'
    }, {
      title: 'Loreng Ingsun',
      content: "wah wah masih aja pake sms hare geneee",
      tags: 'loreng,ingsun'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('posts', null, {});
  }
};
