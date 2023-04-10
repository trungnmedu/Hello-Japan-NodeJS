const mongoose = require("mongoose")

const countConnected = () => {
    const connected = mongoose.connect.length
    console.log(`${connected} database connection establish.`);
}

module.exports={
    countConnected
}