import express from "express";
import cors from "cors";
import records from "./routes/records.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("./record", records);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
	console.log(`Process ID: ${process.pid}`);
});
