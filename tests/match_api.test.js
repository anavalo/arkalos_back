const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Match = require('../models/match')


const initialMatches = [{
    query_name: "Mitsaras",
    visited: false
},
{
    query_name: "Kostars",
    visited: true
}]

beforeEach(async () => {
  await Match.deleteMany({})

  let matchObject = new Match(initialMatches[0])
  await matchObject.save()

  matchObject = new Match(initialMatches[1])
  await matchObject.save()
})

test('all notes are returned', async () => {
  const response = await api.get('/api/matches')
  expect(response.body).toHaveLength(initialMatches.length)
})

test('visited functionality works', async() => {
    const beforeMatches = await api.get('/api/matches')
    
    const edited = beforeMatches.body[0]
    console.log(edited)
    edited.visited = true

    await api.put(`/api/matches/${edited._id}`)
    
    const afterMatches = await api.get('/api/matches')

    expect(afterMatches.body[0].visited).toBe(true)
})


afterAll(() => {
  mongoose.connection.close()
})