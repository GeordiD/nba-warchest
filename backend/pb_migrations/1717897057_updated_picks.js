/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  collection.indexes = [
    "CREATE INDEX `idx_A5H7OjK` ON `picks` (`toTeam`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eulyej4j",
    "name": "originator",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xc8kvpcg",
    "name": "toTeam",
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
  const collection = dao.findCollectionByNameOrId("gab4a2mexol2x1a")

  collection.indexes = [
    "CREATE INDEX `idx_A5H7OjK` ON `picks` (`owner`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eulyej4j",
    "name": "originalOwner",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xc8kvpcg",
    "name": "owner",
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
})
