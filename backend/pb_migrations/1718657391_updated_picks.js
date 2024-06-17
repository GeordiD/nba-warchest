/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9kbsyc5r",
    "name": "swaps",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "whdhvuy9fx9hfsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9kbsyc5r",
    "name": "swap",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "whdhvuy9fx9hfsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
