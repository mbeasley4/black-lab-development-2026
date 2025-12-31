import mongoose, { Schema, models, model } from "mongoose";

export interface ArticleDoc extends mongoose.Document {
    legacyId?: number;
    title: string;
    slug: string;
    excerpt: string;
    contentHtml: string;
    coverImage?: string;
    status: "publish" | "draft";
    publishedAt?: Date;
}

const ArticleSchema = new Schema<ArticleDoc>(
    {
        legacyId: Number,
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true, index: true },
        excerpt: { type: String, required: true },
        contentHtml: { type: String, required: true },
        coverImage: String,
        status: { type: String, enum: ["publish", "draft"], default: "draft" },
        publishedAt: Date,
    },
    { timestamps: true }
);

export const Article =
    models.Article || model<ArticleDoc>("Article", ArticleSchema);
