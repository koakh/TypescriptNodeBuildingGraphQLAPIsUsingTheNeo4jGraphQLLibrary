# NOTES

## Links

- [Intro To GraphQL &amp; Neo4j - Building GraphQL APIs Using The Neo4j GraphQL Library](https://neo4j.com/graphacademy/training-graphql-apis/01-graphql-apis-intro-to-graphql/)

## Links Lib Docs

- [Type Definitions - Neo4j GraphQL Library](https://neo4j.com/docs/graphql-manual/current/type-definitions/)

## Intro To GraphQL & Neo4j

finished commit: 'finished Intro To GraphQL & Neo4j'
[master 688171f]
simple server, but a non boilerplate awesome graphql server

```gql
{
  movies(options: { limit: 10 }) {
    title
    year
    imdbRating
    genres{
      name
    }
  }
}
```

## Cypher

```cypher
# delete and detach all nodes
$ MATCH (a) DETACH DELETE a;
# get username
MATCH (c:Customer {username: 'EmilEifrem7474'}) RETURN  c
```

## Sandbox Authentication

- [Home - Neo4j Sandbox](https://sandbox.neo4j.com/)
- [my CodeSandbox to debug Unauthenticated](https://codesandbox.io/s/affectionate-monad-ntd86)

```conf
NEO4J_GRAPHQL_JWT_SECRET=dFt8QaYykR6PauvxcyKVXKauxvQuWQTc
NEO4J_URI=bolt://44.193.210.234:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=men-dealer-goals
```

## Enebale debug

pass `DEBUG=@neo4j/graphql:*` in scripts

```json
{
  "debug": "DEBUG=@neo4j/graphql:* ts-node-dev --watch=src/schema.graphql --respawn --debug --inspect=9226 -- src/main.ts"
}
```
