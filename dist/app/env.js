"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVariables = void 0;
exports.envVariables = {
    serverPort: process.env.SERVER_PORT || '4000',
    neo4JUri: process.env.NEO4J_URI || 'bolt://localhost:7687',
    neo4JUser: process.env.NEO4J_USER || 'neo4j',
    neo4JPassword: process.env.NEO4J_PASSWORD || 'letmein',
};
//# sourceMappingURL=env.js.map