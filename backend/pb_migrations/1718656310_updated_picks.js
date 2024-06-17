/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  // remove
  collection.schema.removeField("7qytmgee")

  // remove
  collection.schema.removeField("erjalcfo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9kbsyc5r",
    "name": "swap",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "whdhvuy9fx9hfsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufuzxdon",
    "name": "conveysFrom",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gab4a2mexol2x1a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzrkauq9",
    "name": "priority",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7qytmgee",
    "name": "isSwapped",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

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

  // remove
  collection.schema.removeField("9kbsyc5r")

  // remove
  collection.schema.removeField("ufuzxdon")

  // remove
  collection.schema.removeField("kzrkauq9")

  return dao.saveCollection(collection)
})
