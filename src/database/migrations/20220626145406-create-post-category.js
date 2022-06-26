module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        field: 'post_id',
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        },
        field: 'category_id',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  },
};
