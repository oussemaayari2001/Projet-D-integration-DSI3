const {DataTypes}=require('sequelize')
const db=require("../config/database")
const annonce=db.define('Annonce',{

    title:{
        type:DataTypes.STRING(20),
        allowNull:false,
        validate:{
            len:[3],
            notNull: {
                msg: 'Please enter a title'
              }

            
        }

    },
    num_poste_vac:{
        type:DataTypes.INTEGER,
        allowNull:false,
     validate:{
        notNull: {
            msg: 'Please enter a number'
          }
     }

    },
    Type_e:{
        type:DataTypes.STRING,
        allowNull:false,
        notNull: {
            msg: 'Please enter a type'
          }
        
    },
    niveau:{
        type:DataTypes.STRING,
        allowNull:false,
        notNull: {
            msg: 'Please enter a level'
          }
        
    },

    discription:{
        type:DataTypes.TEXT,
        allowNull:true,
        
    },
    motcles:{
        type:DataTypes.TEXT,
        allowNull:true,
        
    }


})

module.exports=annonce