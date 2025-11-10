import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CoreResult, Lesson, Reference } from "@/core/types";
import RegisterManager from "./RegisterManager";

interface GetContentResult {
  lesson: Lesson;
  mdx: string;
  references?: Reference[];
}

export default class FileManager {
  private static readonly workDir = process.cwd();
  private static readonly contentDir = "content";

  private constructor() {}

  static getContent = (slug: string): CoreResult<GetContentResult, null> => {
    const findLessonResult = RegisterManager.findLessonBySlug(slug);

    // TODO : handle error case
    if (!findLessonResult.success) throw new Error(findLessonResult.message);

    const findReferencesResult = RegisterManager.findReferencesByLessonId(
      findLessonResult.data.id
    );

    const contentPath = path.join(...findLessonResult.data.paths);
    const source = fs.readFileSync(this.getPath(contentPath), "utf8");

    return {
      success: true,
      data: {
        lesson: findLessonResult.data,
        mdx: matter(source).content,
        references: findReferencesResult.success
          ? findReferencesResult.data
          : undefined,
      },
    };
  };

  private static getPath = (subPath: string): string => {
    return path.join(
      this.workDir,
      subPath ? path.join(this.contentDir, subPath) : this.contentDir
    );
  };
}
