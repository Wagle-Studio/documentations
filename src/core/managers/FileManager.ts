import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CoreResult } from "@/core/types";
import RegisterManager from "./RegisterManager";

export default class FileManager {
  private static readonly workDir = process.cwd();
  private static readonly contentDir = "content";

  private constructor() {}

  static getContent = (slug: string): CoreResult<string, null> => {
    const findLessonResult = RegisterManager.findLessonBySlug(slug);

    if (!findLessonResult.success) throw new Error(findLessonResult.message);

    const contentPath = path.join(...findLessonResult.data.paths);
    const source = fs.readFileSync(this.getPath(contentPath), "utf8");

    return {
      success: true,
      data: matter(source).content,
    };
  };

  private static getPath = (subPath: string): string => {
    return path.join(
      this.workDir,
      subPath ? path.join(this.contentDir, subPath) : this.contentDir
    );
  };
}
