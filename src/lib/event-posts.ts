import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

type EventPost = {
    slug: string,
    title: string,
    date: string,
    imgList: string[]
    type: "image" | "video"
}

const postsDirectory = path.join(process.cwd(), '/src/eventposts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const eventPost: EventPost = {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            imgList: matterResult.data.imgList,
            type: matterResult.data.type
        }

        // Combine the data with the id
        return eventPost
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(slug: string) {
    // console.log(slug);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const eventPostWithHTML: EventPost & { contentHtml: string } = {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
        imgList: matterResult.data.imgList, 
        type: matterResult.data.type
    }

    // Combine the data with the id
    return eventPostWithHTML
}