import dotenv from "dotenv";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envPath });

console.log("[load-env] cwd:", process.cwd());
console.log("[load-env] loaded .env.local:", envPath);
console.log("[load-env] MONGO_DB_MONGODB_URI exists:", !!process.env.MONGO_DB_MONGODB_URI);
