/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  collection.indexes = [
    "CREATE INDEX `idx_6WxCDJB` ON `teams` (`abbr`)"
  ]

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dkbjmd4v8zxkmye")

  collection.indexes = [
    "CREATE INDEX `idx_6WxCDJB` ON `teams` (`acronym`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o5t0r7mj",
    "name": "acronym",
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
