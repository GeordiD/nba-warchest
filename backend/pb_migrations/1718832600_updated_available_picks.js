/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dhg68g3st77xfqb")

  collection.options = {
    "query": "SELECT p.originator as id\nFROM picks as p\nGROUP BY p.originator"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dhg68g3st77xfqb")

  collection.options = {
    "query": "SELECT originator as id\nFROM picks\nGROUP BY originator"
  }

  return dao.saveCollection(collection)
})
