import "./load-env";

import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";
import fs from "node:fs";

async function main() {
    console.log("Mongo URI exists:", !!process.env.MONGODB_URI);

    await dbConnect();

    const raw = fs.readFileSync("data/articles.new.json", "utf8");
    const items = JSON.parse(raw);

    for (const item of items) {
        await Article.updateOne(
            { slug: item.slug },
            {
                ...item,
                publishedAt: item.publishedAt
                    ? new Date(item.publishedAt)
                    : undefined,
            },
            { upsert: true }
        );
    }

    console.log(`Seeded ${items.length} articles`);
    process.exit(0);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
