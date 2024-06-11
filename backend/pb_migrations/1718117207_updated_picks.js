/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehe7bzws",
    "name": "protections",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "0mtdahrefk4t5vu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wiqf3wcm",
    "name": "conveysTo",
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
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // remove
  collection.schema.removeField("ehe7bzws")

  // remove
  collection.schema.removeField("wiqf3wcm")

  return dao.saveCollection(collection)
})
