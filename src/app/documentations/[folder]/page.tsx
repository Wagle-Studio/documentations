import FileManager from "@/core/FileManager";

export async function generateStaticParams() {
  return FileManager.getFolderPaths().map((folderPath: string) => ({
    folder: folderPath,
  }));
}

export default async function Documentations({ params }: { params: { folder: string } }) {
  const { folder } = await params;

  return <h1>{folder}</h1>;
}
