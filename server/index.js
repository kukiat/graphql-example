const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const bodyParser = require('body-parser')
const cors = require('cors')
const schema = require('./src/schema')
const app = express()

const db = require('./utils/connect')

const PORT = process.env.PORT || 3001

app.use(cors({ origin: `http://localhost:3000` }))
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.listen(PORT, () => {
  console.log(`grqphql server start at port ${PORT}`)
})

