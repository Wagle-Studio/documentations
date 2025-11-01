import { NextResponse } from "next/server";
import { ApiResponseFail, ApiResponseSuccess, Course } from "@/core/types";
import FileManager from "@/core/managers/FileManager";

export async function GET() {
  const contentFolders = FileManager.getFolderPaths();

  if (!contentFolders) {
    return NextResponse.json<ApiResponseFail<null>>({
      success: false,
      message: "Une erreur est survenue",
    });
  }

  return NextResponse.json<ApiResponseSuccess<Course[]>>({
    success: true,
    data: contentFolders,
  });
}
