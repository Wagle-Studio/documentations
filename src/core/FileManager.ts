import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default class FileManager {
  private static readonly workDir = process.cwd();
  private static readonly contentDir = "content";

  private constructor() {}

  static getContent = (folderPath: string, filePath: string): string => {
    const contentPath = path.join(folderPath, `${filePath}.mdx`);
    const source = fs.readFileSync(this.getPath(contentPath), "utf8");
    return matter(source).content;
  };

  static getContentPaths = (): string[] => {
    const folderPaths = this.readDirFolders();
    const contentPaths: string[] = [];

    folderPaths.forEach((folderPath) => {
      this.getFilePaths(folderPath).forEach((filePath) =>
        contentPaths.push(path.join(folderPath, filePath))
      );
    });

    return contentPaths;
  };

  static getFolderPaths = (folderPath?: string): string[] => {
    return this.readDirFolders(folderPath);
  };

  static getFilePaths = (folderPath?: string): string[] => {
    return this.readDirFiles(folderPath).map((file) =>
      file.replace(/\.mdx$/, "")
    );
  };

  private static readDirFiles = (folderPath?: string): string[] => {
    return fs.readdirSync(this.getPath(folderPath));
  };

  private static readDirFolders = (folderPath?: string): string[] => {
    return fs
      .readdirSync(this.getPath(folderPath), {
        withFileTypes: true,
      })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  };

  private static getPath = (subPath?: string): string => {
    return path.join(
      this.workDir,
      subPath ? path.join(this.contentDir, subPath) : this.contentDir
    );
  };
}
