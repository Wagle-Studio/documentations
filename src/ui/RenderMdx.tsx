import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { TagCode } from "@/ui/atoms/tag-code/TagCode";
import { TagHeading2 } from "@/ui/atoms/tag-heading2/TagHeading2";

const DIMENSIONS_REGEX = /(\d+)_(\d+)/;

interface RenderMdxProps {
  content: string;
}

export const RenderMdx = ({ content }: RenderMdxProps) => {
  return (
    <MDXRemote
      source={content}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      components={{ h2: TagHeading2, img: TagImage, code: TagCode, a: TagAnchor }}
    />
  );
};

interface TagAnchorProps {
  href?: string;
  children: React.ReactNode;
}

export const TagAnchor = ({ href = "", children }: TagAnchorProps) => {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

interface TagImageProps {
  src: string;
  alt: string;
}

export const TagImage = ({ src, alt }: TagImageProps) => {
  const filename = src.split("/").pop() || "";
  const dimensions = filename.match(DIMENSIONS_REGEX);

  const width = dimensions ? parseInt(dimensions[1]) : null;
  const height = dimensions ? parseInt(dimensions[2]) : null;

  if (!width || !height) return null;

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mdx_image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
      <span className="mdx_image__alt">{alt}</span>
    </>
  );
};
