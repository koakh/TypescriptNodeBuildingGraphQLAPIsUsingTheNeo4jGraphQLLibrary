"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const graphql_1 = require("@neo4j/graphql");
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const apollo_server_1 = require("apollo-server");
// init dotenv
const result = dotenv_1.config();
if (result.error) {
    throw result.error;
}
;
// after init env
const app_1 = require("./app");
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
const driver = neo4j_driver_1.default.driver(app_1.envVariables.neo4JUri, neo4j_driver_1.default.auth.basic(app_1.envVariables.neo4JUser, app_1.envVariables.neo4JPassword));
const neoSchema = new graphql_1.Neo4jGraphQL({ typeDefs, driver });
const server = new apollo_server_1.ApolloServer({
    schema: neoSchema.schema,
    context: ({ req }) => ({ req }),
});
server.listen(app_1.envVariables.serverPort).then(() => console.log(`server listening on port ${app_1.envVariables.serverPort}`));
//# sourceMappingURL=main.js.map