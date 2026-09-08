import { NextRequest, NextResponse } from "next/server";
import { deletePost, getPostById, updatePost } from "@/lib/posts";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return NextResponse.json({ error: "Post not found." }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request body." }, { status: 400 });

  const post = await updatePost(id, {
    title: body.title,
    excerpt: body.excerpt,
    content: body.content,
    category: body.category,
    author: body.author,
    image: body.image,
    date: body.date,
    published: body.published,
  });

  if (!post) return NextResponse.json({ error: "Post not found." }, { status: 404 });
  return NextResponse.json({ post });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const ok = await deletePost(id);
  if (!ok) return NextResponse.json({ error: "Post not found." }, { status: 404 });
  return NextResponse.json({ success: true });
}
