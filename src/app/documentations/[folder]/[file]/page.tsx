import FileManager from "@/core/FileManager";
import { RenderMdx } from "@/ui/RenderMdx";

export async function generateStaticParams() {
  return FileManager.getContentPaths().map((folderPath: string) => {
    const [folder, file] = folderPath.split("/");
    return { folder, file };
  });
}

export default async function Content({
  params,
}: {
  params: { folder: string; file: string };
}) {
  const { folder, file } = await params;
  const content = FileManager.getContent(folder, file);

  return (
    <div className="app__lesson__content">
      <RenderMdx content={content} />
    </div>
  );
}
