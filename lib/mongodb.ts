import mongoose from "mongoose";

declare global {
    // eslint-disable-next-line no-var
    var _mongooseConn: typeof mongoose | undefined;
}

function getMongoUri(): string {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error(
            "MONGODB_URI is not defined. Set it in your environment variables."
        );
    }

    return uri;
}

export async function dbConnect() {
    if (!global._mongooseConn) {
        global._mongooseConn = await mongoose.connect(getMongoUri(), {
            bufferCommands: false,
        });
    }

    return global._mongooseConn;
}
