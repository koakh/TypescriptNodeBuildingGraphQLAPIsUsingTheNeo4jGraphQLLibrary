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
$ MATCH (a) DETACH DELETE a;
```
