const matchesRouter = require('express').Router()
const Match = require('../models/match')

matchesRouter.get('/', (request, response) =>{
    const query = request.query.companyToQuery
    Match.find({'query_name': query})
    .then(matches=>{response.json(matches.map(match => match.toJSON()))
    })
})

matchesRouter.put('/:id', async (request, response) => {
    const body = request.body
    const match = {...body, visited: body.visited}
    const updatedMatch = await Match.findByIdAndUpdate(request.params.id, match, {new: true})
    response.json(updatedMatch.toJSON())
})

matchesRouter.delete('/:id', (request, response, next)=>{
    Match.findByIdAndRemove(request.params.id)
    .then(result=>{
    response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = matchesRouter