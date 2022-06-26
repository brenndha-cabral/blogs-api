module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [{
        name: 'Inovação',
      },
      {
        name: 'Escola',
      },
      ],
      {
        timestamps: false,
      },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
