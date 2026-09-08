import { promises as fs } from "fs";
import path from "path";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image?: string;
  date: string;
  published: boolean;
};

const DATA_PATH = path.join(process.cwd(), "data", "posts.json");

async function readAll(): Promise<Post[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw) as Post[];
  } catch {
    return [];
  }
}

async function writeAll(posts: Post[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await readAll();
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.published);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await readAll();
  return posts.find((p) => p.slug === slug);
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await readAll();
  return posts.find((p) => p.id === id);
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createPost(
  input: Omit<Post, "id" | "slug"> & { slug?: string }
): Promise<Post> {
  const posts = await readAll();
  const baseSlug = input.slug ? slugify(input.slug) : slugify(input.title);
  let slug = baseSlug || `post-${Date.now()}`;
  let counter = 2;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
  const newPost: Post = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    category: input.category,
    author: input.author,
    image: input.image || "",
    date: input.date,
    published: input.published,
  };
  posts.push(newPost);
  await writeAll(posts);
  return newPost;
}

export async function updatePost(
  id: string,
  updates: Partial<Omit<Post, "id">>
): Promise<Post | undefined> {
  const posts = await readAll();
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  posts[index] = { ...posts[index], ...updates };
  await writeAll(posts);
  return posts[index];
}

export async function deletePost(id: string): Promise<boolean> {
  const posts = await readAll();
  const next = posts.filter((p) => p.id !== id);
  if (next.length === posts.length) return false;
  await writeAll(next);
  return true;
}
