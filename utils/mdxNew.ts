import path from "path"
import {sync} from 'glob';
import {Post} from "../type/mdx";
import fs from "fs";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), 'contents/blog')

export const getSlugs = (): string[] => {
    const paths = sync(`${BLOG_PATH}/*.mdx`);

    return paths.map(path => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    })
}

export const getAllPost = () => {
    const blog = getSlugs().map(slug => getPostFromSlug(slug)).sort(
        (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
    return blog;
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(BLOG_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);

    const {content, data} = matter(source);

    return {
        content,
        meta: {
            slug,
            title: data.title ?? slug,
            description: data.description,
            date: data.date,
            tags: (data.tags ?? []).sort()
        }
    }

}