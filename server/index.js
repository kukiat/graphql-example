const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const bodyParser = require('body-parser')

const schema = require('./src/schema')
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`grqphql server start at port ${PORT}`)
})

