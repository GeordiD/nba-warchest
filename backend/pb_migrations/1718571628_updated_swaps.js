/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whdhvuy9fx9hfsp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehoxrhij",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whdhvuy9fx9hfsp")

  // remove
  collection.schema.removeField("ehoxrhij")

  return dao.saveCollection(collection)
})
