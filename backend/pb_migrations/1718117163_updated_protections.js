/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t96ozfs0",
    "name": "pick",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gab4a2mexol2x1a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu")

  // remove
  collection.schema.removeField("t96ozfs0")

  return dao.saveCollection(collection)
})
