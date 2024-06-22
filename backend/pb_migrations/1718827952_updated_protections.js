/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovca2m3f",
    "name": "swap",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "whdhvuy9fx9hfsp",
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
  collection.schema.removeField("ovca2m3f")

  return dao.saveCollection(collection)
})
