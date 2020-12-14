const companiesRouter = require('express').Router()
const Match = require('../models/match')

companiesRouter.get('/', (request, response) =>{
    Match.find({}, 'query_name').then(matches=>{response.json(matches.map(match => match.toJSON()))
    })
})

module.exports = companiesRouter