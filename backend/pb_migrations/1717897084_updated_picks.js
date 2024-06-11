/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  collection.indexes = []

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcllwf1v",
    "name": "year",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  collection.indexes = [
    "CREATE INDEX `idx_A5H7OjK` ON `picks` (`toTeam`)"
  ]

  // remove
  collection.schema.removeField("fcllwf1v")

  return dao.saveCollection(collection)
})
