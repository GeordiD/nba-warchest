/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o5t0r7mj",
    "name": "abbr",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o5t0r7mj",
    "name": "abbr",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
