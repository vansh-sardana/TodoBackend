const mongoose= require("mongoose")

require("dotenv").config();

const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Connection successful");
    }).catch((e)=>{
        console.log("issue in connection of db");
        console.log(e);
        process.exit(1);
    });
}

module.exports= dbConnect;