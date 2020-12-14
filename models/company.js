const mongoose = require('mongoose')


const companiesSchema = new mongoose.Schema({
    query_name: String
})

module.exports = mongoose.model('Company', companiesSchema)