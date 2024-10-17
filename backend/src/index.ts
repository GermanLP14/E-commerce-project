import dotenv from "dotenv";
import path from "path";
import express from "express";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
