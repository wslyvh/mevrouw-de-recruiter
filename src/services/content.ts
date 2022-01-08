
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Blog, Service } from 'utils/types'

const baseFolder = 'content'

export function GetBlogs(): Array<Blog> {
    const dir = join(process.cwd(), baseFolder, 'blogs')
    const files = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.md'))
    const items = files.map(i => {
        const fullPath = join(dir, i.name)
        const content = fs.readFileSync(fullPath, 'utf8')
        if (!content) {
            console.log('File has no content..', i.name)
        }
        
        if (content) {
            const doc = matter(content)
            return { 
                ...doc.data,
                slug: i.name.replace('.md', ''),
                date: new Date(doc.data.date as string).getTime(),
                body: doc.content
            } as Blog
        }
    }).filter(i => !!i) as Array<Blog>
    
    return items.filter(i => i.date < new Date().getTime()).sort((a, b) => b.date - a.date)
}

export function GetServices(): Array<Service> {
    const dir = join(process.cwd(), baseFolder, 'services')
    const files = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.md'))
    const items = files.map(i => {
        const fullPath = join(dir, i.name)
        const content = fs.readFileSync(fullPath, 'utf8')
        if (!content) {
            console.log('File has no content..', i.name)
        }
        
        if (content) {
            const doc = matter(content)
            return { 
                ...doc.data,
                slug: i.name.replace('.md', ''),
                body: doc.content
            } as Service
        }
    }).filter(i => !!i) as Array<Service>
    
    return items
}