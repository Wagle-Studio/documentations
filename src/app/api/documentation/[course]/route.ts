import { NextResponse } from "next/server";
import { ApiResponseFail, ApiResponseSuccess, Lesson } from "@/core/types";
import FileManager from "@/core/managers/FileManager";

interface GetParams {
  params: Promise<{
    course: string;
  }>;
}

export async function GET(request: Request, { params }: GetParams) {
  const { course } = await params;

  const lessons = FileManager.getFilePaths(course);

  if (!lessons) {
    return NextResponse.json<ApiResponseFail<null>>({
      success: false,
      message: "Une erreur est survenue",
    });
  }

  const response: ApiResponseSuccess<Lesson[]> = {
    success: true,
    data: lessons,
  };

  return NextResponse.json(response);
}
