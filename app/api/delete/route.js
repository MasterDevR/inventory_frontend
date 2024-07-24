import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const uploadDir = path.join(
  process.cwd(),
  "public",
  "images",
  "item-image-dummy",
);

export async function POST(request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: "Filename is required" },
        { status: 400 },
      );
    }

    const filePath = path.join(uploadDir, image);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({
        message: "File deleted successfully",
      });
    } else {
      return NextResponse.json({ error: "File not found" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error during file deletion:", error);
    return NextResponse.json(
      { error: "Error during file deletion" },
      { status: 200 },
    );
  }
}
