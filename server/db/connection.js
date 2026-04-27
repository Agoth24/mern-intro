import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI || "";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

try {
	// connect to the mongo client
	await client.connect();

	await client.db("admin").command({ ping: 1 });
	console.log(
		"Pinged your deployment, Agoth. You successfully connected to MongoDB",
	);
} catch (err) {
	console.error(err);
}

const db = client.db("employees");

export default db;
