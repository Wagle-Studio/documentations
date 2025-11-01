import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { TagCode } from "./atoms";

interface RenderMdxProps {
  content: string;
}

export const RenderMdx = ({ content }: RenderMdxProps) => {
  return (
    <MDXRemote
      source={content}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      components={{code: TagCode}}
    />
  );
};
