const express = require("express")
const { ApollogServer } = require("apollo-server-express")

const typeDefs = require("./api/Types")
const resolvers = require("./api/Resilvers")

const app = express()
const port = process.env.PORT || 5000

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server.applyMiddleware ({ app })

app.listen(port, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
)