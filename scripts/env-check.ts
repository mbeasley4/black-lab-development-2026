import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env.local"),
});

console.log("CWD:", process.cwd());
console.log("MONGO_DB_MONGODB_URI:", process.env.MONGO_DB_MONGODB_URI);
