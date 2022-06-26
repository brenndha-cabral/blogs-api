module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        field: 'user_id',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  },
};
