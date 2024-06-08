/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  // remove
  collection.schema.removeField("ik98w9zl")

  return dao.saveCollection(collection)
})
