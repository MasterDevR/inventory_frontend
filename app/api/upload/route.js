import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();

    // Retrieve files from form data
    const image = formData.get("image");

    if (!image || !(image instanceof File)) {
      throw new Error("Invalid file input");
    }

    // Convert File to Buffer
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Directory to save the images
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "images",
      "item-image-dummy",
    );

    // Ensure the directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Define the file path
    const filePath = path.join(uploadDir, image.name);

    // Save the file
    fs.writeFileSync(filePath, buffer);

    // Respond with success
    return NextResponse.json({
      message: "File uploaded and saved successfully",
    });
  } catch (error) {
    console.error("Error during file upload:", error);
    return NextResponse.json(
      { error: "Error during file upload" },
      { status: 500 },
    );
  }
}
