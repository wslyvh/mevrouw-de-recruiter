import { GetBlogs } from "services/content"
import settings from '../../content/settings.json'

const Sitemap = () => {}

export const getServerSideProps = async ({ res }: any) => {
    const blogs = GetBlogs()
    const baseUrl = settings.url
    const currentDate = new Date().toISOString()
    const launchDate = new Date(2022, 1).toISOString()

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${baseUrl}</loc>
                <lastmod>${currentDate}</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${baseUrl}blog</loc>
                <lastmod>${currentDate}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>
            ${blogs.map((i) => {
                return `
                    <url>
                        <loc>${baseUrl}blog/${i.slug}</loc>
                        <lastmod>${new Date(i.date).toISOString()}</lastmod>
                        <changefreq>weekly</changefreq>
                        <priority>0.7</priority>
                    </url>`
            }).join("")}
        </urlset>`
    
    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()
    
    return {
        props: {},
    }
}

export default Sitemap