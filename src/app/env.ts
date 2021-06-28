export const envVariables = {
  serverPort: process.env.SERVER_PORT || '4000',
  neo4JServer: process.env.NEO4J_SERVER || 'bolt://localhost:7687',
  neo4JUser: process.env.NEO4J_USER || 'neo4j',
  neo4JPassword: process.env.NEO4J_PASSWORD || 'letmein',
}