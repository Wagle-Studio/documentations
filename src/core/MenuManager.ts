import { MenuItem } from "primereact/menuitem";
import FileManager from "./FileManager";

export default class MenuManager {
  private constructor() {}

  static buildMenuSide = (): MenuItem[] => {
    const techMenuItems = FileManager.getFolderPaths().map((folderPath) => ({
      label: folderPath,
      url: `/documentations/${folderPath}`,
    }));

    return [
      {
        label: "Documentations",
        items: techMenuItems,
      },
    ];
  };

  static buildMenuLesson = (folderPath: string): MenuItem[] => {
    const lessonMenuItems = FileManager.getFilePaths(folderPath).map(
      (filePath) => ({
        label: filePath,
        url: `/documentations/${folderPath}/${filePath}`,
      })
    );

    return [
      {
        label: folderPath,
        items: lessonMenuItems,
      },
    ];
  };
}
