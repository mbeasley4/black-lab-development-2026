import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";

export const runtime = "nodejs";

export async function GET(req: Request) {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const includeDrafts = searchParams.get("drafts") === "1";

    const filter = includeDrafts ? {} : { isPublished: true };

    const articles = await Article.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .select("title slug excerpt coverImage tags publishedAt isPublished")
        .lean();

    return NextResponse.json({ articles });
}

export async function POST(req: Request) {
    await dbConnect();

    const body = await req.json();

    const doc = await Article.create({
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        coverImage: body.coverImage ?? "",
        tags: body.tags ?? [],
        isPublished: body.isPublished ?? false,
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : (body.isPublished ? new Date() : undefined),
        seoTitle: body.seoTitle ?? "",
        seoDescription: body.seoDescription ?? "",
    });

    return NextResponse.json({ article: doc }, { status: 201 });
}
