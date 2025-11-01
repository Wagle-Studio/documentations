import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RegisterManager from "./RegisterManager";

export default class FileManager {
  private static readonly workDir = process.cwd();
  private static readonly contentDir = "content";

  private constructor() {}

  static getContent = (slug: string): string => {
    const lesson = RegisterManager.findLessonBySlug(slug);

    if (!lesson) throw new Error();

    const contentPath = path.join(...lesson.paths);
    const source = fs.readFileSync(this.getPath(contentPath), "utf8");
    return matter(source).content;
  };

  private static getPath = (subPath: string): string => {
    return path.join(
      this.workDir,
      subPath ? path.join(this.contentDir, subPath) : this.contentDir
    );
  };
}
