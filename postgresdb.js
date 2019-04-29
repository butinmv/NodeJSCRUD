const Sequelize = require("sequelize");
const sequelize = new Sequelize('staff', 'postgres', '', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Соединение установлено.');
    })
    .catch(err => {
        console.error('Ошибка соединения:', err);
    });

var Staff = sequelize.define('staff', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    sirname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


sequelize.sync();

module.exports.Staff = Staff;

module.exports.sequelize = sequelize;