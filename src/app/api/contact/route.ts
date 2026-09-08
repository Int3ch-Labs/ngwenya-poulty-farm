import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "messages.json");

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const name = body?.name?.trim();
  const phoneOrEmail = body?.contact?.trim();
  const message = body?.message?.trim();

  if (!name || !phoneOrEmail || !message) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  existing.push({
    id: Date.now().toString(36),
    name,
    contact: phoneOrEmail,
    message,
    receivedAt: new Date().toISOString(),
  });

  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(existing, null, 2), "utf-8");

  return NextResponse.json({ success: true });
}
