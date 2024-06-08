/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ik98w9zl",
    "name": "fullName",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ik98w9zl",
    "name": "fullName",
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
})
