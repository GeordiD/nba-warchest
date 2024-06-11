/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0mtdahrefk4t5vu",
    "created": "2024-06-11 14:45:49.567Z",
    "updated": "2024-06-11 14:45:49.567Z",
    "name": "protections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xcwceloa",
        "name": "rangeMin",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "sdmb0xzg",
        "name": "rangeMax",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "v7hjyxdu",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0mtdahrefk4t5vu");

  return dao.deleteCollection(collection);
})
