import { NextRequest, NextResponse } from "next/server";
import { createPost, getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body?.title || !body?.content) {
    return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
  }

  const post = await createPost({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt || body.content.slice(0, 140),
    content: body.content,
    category: body.category || "Announcement",
    author: body.author || "Ngwenyama Poultry Farm",
    image: body.image || "",
    date: body.date || new Date().toISOString().slice(0, 10),
    published: body.published !== undefined ? Boolean(body.published) : true,
  });

  return NextResponse.json({ post }, { status: 201 });
}
