# SEED

```cypher
MATCH (a) DETACH DELETE a
# create index
# deprecated
# CALL db.index.fulltext.createNodeIndex("bookIndex", ["Book"],["title", "description"])
# https://neo4j.com/docs/cypher-manual/current/administration/indexes-for-full-text-search/
CREATE FULLTEXT INDEX bookIndex FOR (n:Book) ON EACH [n.title, n.description]
# test with
```

```gql
mutation {
  createBooks(
    input: [
      {
        isbn: "1492047686"
        title: "Graph Algorithms"
        price: 37.48
        description: "Practical Examples in Apache Spark and Neo4j"
        subjects: { create: [{ name: "Graph theory" }, { name: "Neo4j" }] }
        authors: {
          create: [{ name: "Mark Needham" }, { name: "Amy E. Hodler" }]
        }
      }
      {
        isbn: "1119387507"
        title: "Inspired"
        price: 21.38
        description: "How to Create Tech Products Customers Love"
        subjects: {
          create: [{ name: "Product management" }, { name: "Design" }]
        }
        authors: { create: { name: "Marty Cagan" } }
      }
      {
        isbn: "190962151X"
        title: "Ross Poldark"
        price: 15.52
        description: "Ross Poldark is the first novel in Winston Graham's sweeping saga of Cornish life in the eighteenth century."
        subjects: {
          create: [{ name: "Historical fiction" }, { name: "Cornwall" }]
        }
        authors: { create: { name: "Winston Graham" } }
      }
    ]
  ) {
    books {
      title
    }
  }

  createCustomers(
    input: [
      {
        username: "EmilEifrem7474"
        reviews: {
          create: {
            rating: 5
            text: "Best overview of graph data science!"
            book: { connect: { where: { isbn: "1492047686" } } }
          }
        }
        orders: {
          create: {
            books: { connect: { where: { title: "Graph Algorithms" } } }
            shipTo: {
              create: {
                address: "111 E 5th Ave, San Mateo, CA 94401"
                location: {
                  latitude: 37.5635980790
                  longitude: -122.322243272725
                }
              }
            }
          }
        }
      }
      {
        username: "BookLover123"
        reviews: {
          create: [
            {
              rating: 4
              text: "Beautiful depiction of Cornwall."
              book: { connect: { where: { isbn: "190962151X" } } }
            }
          ]
        }
        orders: {
          create: {
            books: {
              connect: [
                { where: { title: "Ross Poldark" } }
                { where: { isbn: "1119387507" } }
                { where: { isbn: "1492047686" } }
              ]
            }
            shipTo: {
              create: {
                address: "Nordenskiöldsgatan 24, 211 19 Malmö, Sweden"
                location: { latitude: 55.6122270502, longitude: 12.99481772774 }
              }
            }
          }
        }
      }
    ]
  ) {
    customers {
      username
    }
  }
}
```
