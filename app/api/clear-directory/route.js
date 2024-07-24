import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { directory } = await request.json();
  let status, message;
  fs.readdir(directory, (err, files) => {
    if (err) {
      (status = 404),
        (message = `Failed to list contents of directory: ${err}`);
    }

    // Loop through each file
    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.unlink(filePath, (err) => {
        if (err) {
          (status = 403), (message = `File not Found : ${err}`);
        } else {
          (status = 200), (message = `File deleted`);
        }
      });
    });
  });
  return NextResponse.json({
    status: status,
    message: message,
  });
}
