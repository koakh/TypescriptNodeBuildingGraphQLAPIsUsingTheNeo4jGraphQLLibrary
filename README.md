# README

A minimal typescript starter, with env-cmd, ts-node-dev, to follow graphacademy `intro to graphql & neo4j - building graphql apis using the neo4j graphql library` tutorial

## Links

- [Intro To GraphQL & Neo4j - Building GraphQL APIs Using The Neo4j GraphQL Library](https://neo4j.com/graphacademy/training-graphql-apis/01-graphql-apis-intro-to-graphql/)

## Links Lib Docs

- [Type Definitions - Neo4j GraphQL Library](https://neo4j.com/docs/graphql-manual/current/type-definitions/)

## Important NOTES

there are two similar projects to follow tutorial, a simple one with nodejs and a nestjs, nestjs is more like a starter with authentication and lerna, useful if one needs to bootstrap a neo4j graphql based project boilerplate, project repositories are here:

- [TypescriptNodeBuildingGraphQLAPIsUsingTheNeo4jGraphQLLibrary](https://github.com/koakh/TypescriptNodeBuildingGraphQLAPIsUsingTheNeo4jGraphQLLibrary)
- [NestJsGraphqlSchemaFirstNeo4jLibraryStarter](https://github.com/koakh/NestJsGraphqlSchemaFirstNeo4jLibraryStarter)

there are some files in common like

`Neo4j/BuildingGraphQLAPIsUsingTheNeo4jGraphQLLibrary/schema.graphql`
  diferences in user roles: `admin`
`Neo4j/NestJsGraphqlSchemaFirstNeo4jLibraryStarter/packages/backend/src/schema.graphql`
  diferences in user roles: `ROLE_ADMIN`

## Launch database and seed data

> bellow steps are only required first time, `MATCH (a) DETACH DELETE a` query can be used more than one time to tearDown/drop database

1. launch neo4j desktop
2. create database
3. clean database and create index's

```cypher
# delete all nodes
MATCH (a) DETACH DELETE a

# create index
CREATE FULLTEXT INDEX bookIndex FOR (n:Book) ON EACH [n.title, n.description]
```

## Config Neo4j driver

edit `.env`

```shell
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="password"
```

### Install dependencies

```shell
# install dependencies
$ npm i
```

## Run project

```shell
$ npm run debug
```

## Debug

launcher debugger with `F5`

## Launch Operations

use `http.client` or apollo studio at <http://localhost:4000/>