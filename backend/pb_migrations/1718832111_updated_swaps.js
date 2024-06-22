/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whdhvuy9fx9hfsp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s2ztmnsr",
    "name": "conveysToPicks",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gab4a2mexol2x1a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whdhvuy9fx9hfsp")

  // remove
  collection.schema.removeField("s2ztmnsr")

  return dao.saveCollection(collection)
})
