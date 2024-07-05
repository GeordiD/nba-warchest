/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b768te7k99mvfqk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqbteesb",
    "name": "worstTo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dkbjmd4v8zxkmye",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b768te7k99mvfqk")

  // remove
  collection.schema.removeField("bqbteesb")

  return dao.saveCollection(collection)
})
