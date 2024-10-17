import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const serviceAccount = require(path.resolve(
	__dirname,
	process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
));

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

export const auth = admin.auth();
export const db = admin.firestore();
