const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

// Mensagem para desenvolvimento!
sequelize.authenticate()
.then(function() {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function() {
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
})

module.exports = sequelize;