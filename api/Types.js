const { gql } = require("apollo-server-express")

const typeDefs = gql`
        # Type
        type Tweet {
            _id: String
            tweet: String
            author: String
        }

        # Query
        type Query {
            getTweet(_id: String): Tweet
            getTweets: [Tweet]
        }

        # Mutation
        type Mutation {
            createTweet(tweet: String, author: String): Tweet

            deleteTweet(_id: String): Tweet

            updateTweet(_id: String!, tweet: String!): Tweet
        }
`

module.exports = typeDefs