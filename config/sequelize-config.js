import Sequelize from "sequelize";

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'seuze'
})

export default connection