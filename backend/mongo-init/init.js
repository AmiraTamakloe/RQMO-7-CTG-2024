const conn = new Mongo();
const db = conn.getDB(process.env.MONGO_INITDB_DATABASE);

db.createUser({
	user: process.env.MONGO_INITDB_ROOT_USERNAME,
	pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
	roles: [
		{
			role: 'readWrite',
			db: process.env.MONGO_INITDB_DATABASE,
		},
	],
});

db.createCollection(process.env.DATABASE_COLLECTION_DISEASES);
db.createCollection(process.env.DATABASE_COLLECTION_OTHER_COLLECTION);
