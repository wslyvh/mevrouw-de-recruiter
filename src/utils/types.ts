export interface Blog {
    slug: string
    title: string
    description: string
    date: number
    image: string
    category: Array<string>
    body: string
}

export interface Category { 
    slug: string
    title: string
}

export interface Service { 
    slug: string
    title: string
    description: string
    image: string
    body: string
}