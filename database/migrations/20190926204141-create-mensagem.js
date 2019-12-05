

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('mensagems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    partida_id: {
      type: Sequelize.INTEGER,
      references: { model: 'partidas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
      allowNull: false,
    },
    mensagem: {
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('mensagems'),
};
