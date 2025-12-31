import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env.local"),
});

console.log("CWD:", process.cwd());
console.log("MONGODB_URI:", process.env.MONGODB_URI);
