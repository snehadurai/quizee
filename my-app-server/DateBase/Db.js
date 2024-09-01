const mongoose = require("mongoose")
require("dotenv").config()
const database = () => {
    mongoose.connect(process.env.MONGO_URL,)
        .then(() => {
            console.log("DataBase Connected Successfully");
        })
        .catch(() => {
            console.log("DataBase not Connected Successfully");
        })
}
module.exports = database