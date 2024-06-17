/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erjalcfo",
    "name": "isConditional",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // remove
  collection.schema.removeField("erjalcfo")

  return dao.saveCollection(collection)
})
