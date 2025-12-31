import fs from "node:fs";
import path from "node:path";
import csv from "csv-parser";

const INPUT_CSV = path.resolve("articles.csv");
const OUTPUT_JSON = path.resolve("data/articles.json");

const results: any[] = [];

fs.createReadStream(INPUT_CSV)
    .pipe(csv())
    .on("data", (row) => {
        // Skip invalid rows
        if (!row.slug || !row.name || !row.content) return;

        results.push({
            legacyId: row.id ? Number(row.id) : undefined,
            title: row.name.trim(),
            slug: row.slug.trim(),
            excerpt: row.excerpt?.trim() || "",
            contentHtml: row.content,
            coverImage: row.headline_image
                ? `/images/articles/${row.headline_image}`
                : "",
            status: row.status === "publish" ? "publish" : "draft",
            publishedAt: row.create_time
                ? new Date(row.create_time).toISOString()
                : null,
        });
    })
    .on("end", () => {
        fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
        fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2));
        console.log(`✅ Exported ${results.length} articles → ${OUTPUT_JSON}`);
    });
