import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";

export const runtime = "nodejs";

/**
 * GET /api/articles/[slug]
 */
export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    await dbConnect();

    const { slug } = await params;

    const article = await Article.findOne({
        slug,
        isPublished: true,
    }).lean();

    if (!article) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ article });
}

/**
 * PATCH /api/articles/[slug]
 */
export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    await dbConnect();

    const { slug } = await params;
    const body = await req.json();

    const updated = await Article.findOneAndUpdate(
        { slug },
        {
            ...body,
            ...(body.publishedAt
                ? { publishedAt: new Date(body.publishedAt) }
                : {}),
        },
        { new: true }
    ).lean();

    if (!updated) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ article: updated });
}

/**
 * DELETE /api/articles/[slug]
 */
export async function DELETE(
    _req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    await dbConnect();

    const { slug } = await params;

    const deleted = await Article.findOneAndDelete({ slug }).lean();

    if (!deleted) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
}
