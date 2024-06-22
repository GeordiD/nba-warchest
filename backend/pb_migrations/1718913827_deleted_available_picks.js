/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dhg68g3st77xfqb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "dhg68g3st77xfqb",
    "created": "2024-06-19 21:26:41.766Z",
    "updated": "2024-06-19 21:30:00.064Z",
    "name": "available_picks",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT p.originator as id\nFROM picks as p\nGROUP BY p.originator"
    }
  });

  return Dao(db).saveCollection(collection);
})
