import mongoose from "mongoose";

declare global {
    // eslint-disable-next-line no-var
    var _mongooseConn: typeof mongoose | undefined;
}

function getMongoUri(): string {
    const uri = process.env.MONGO_DB_MONGODB_URI;

    if (!uri) {
        throw new Error(
            "MONGO_DB_MONGODB_URI is not defined. Set it in your environment variables."
        );
    }

    return uri;
}

export async function dbConnect() {
    if (!global._mongooseConn) {
        global._mongooseConn = await mongoose.connect(getMongoUri(), {
            bufferCommands: false,
            dbName: 'blacklabdev'  // ← Add this line
        });
    }

    return global._mongooseConn;
}