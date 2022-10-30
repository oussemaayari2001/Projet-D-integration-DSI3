const { Sequelize } = require('sequelize');
const sequelize=require('sequelize');
const db=new Sequelize('bdrecrutment','root','',{
    dialect:'mysql',
    host:'localhost'
})
db.authenticate().then(()=>console.log('ping succeded'))
module.exports=db;
