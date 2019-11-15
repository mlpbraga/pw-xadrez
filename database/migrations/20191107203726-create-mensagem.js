

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Mensagems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_partida: {
      type: Sequelize.INTEGER,
    },
    id_user: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Mensagems'),
};
