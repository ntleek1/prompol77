import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default async function getMdxContent(dir, filename) {
  const filePath = path.join(process.cwd(), dir, `${filename}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return mdxSource;
}
