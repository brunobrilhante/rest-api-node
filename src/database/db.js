const mongoose = require('mongoose')

async function connectDatabase() {
    await mongoose.connect(process.env.DATABASE_STRING)
    const db = mongoose.connection    
}

module.exports = connectDatabase