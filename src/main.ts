import { config } from 'dotenv';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import { ApolloServer } from 'apollo-server';
// init dotenv
const result = config();
if (result.error) {
  throw result.error
};
// after init env
import { envVariables as e } from './app';

const typeDefs = `
  type Movie {
    title: String
    year: Int
    imdbRating: Float
    genres: [Genre] @relationship(type: "IN_GENRE", direction: OUT)
  }

  type Genre {
    name: String
    movies: [Movie] @relationship(type: "IN_GENRE", direction: IN)
  }
`;

const driver = neo4j.driver(e.neo4JServer,
  neo4j.auth.basic(e.neo4JUser, e.neo4JPassword)
);
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neoSchema.schema,
  context: ({ req }) => ({ req }),
});

server.listen(e.serverPort).then(() => console.log(`server listening on port ${e.serverPort}`));
