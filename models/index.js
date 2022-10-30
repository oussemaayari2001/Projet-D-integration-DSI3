const db=require("../config/database.js")
require("./annonce")
db.sync().then((result)=>{
    console.log(result);
    console.log('annonce created');
}).catch((err)=>{
    console.log(err);
})