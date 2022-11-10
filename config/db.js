const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    logging: console.log
});

sequelize.authenticate()
.then(()=>{
    console.log('Database connected');
})
.catch((e)=>{
    console.log('Error'+e);
});

module.exports = sequelize ;