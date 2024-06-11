/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu")

  collection.indexes = [
    "CREATE INDEX `idx_3HFqcfJ` ON `protections` (`toTeam`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu")

  collection.indexes = []

  return dao.saveCollection(collection)
})
