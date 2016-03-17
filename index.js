import express from 'express'
import graphqlHTTP from 'express-graphql'
import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'

const data = require('./data.json')

const app = express()

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (_, args) => data[args.id]
      }
    }
  })
})

app.use('/api', graphqlHTTP({ schema }))

app.listen(3000, console.log)