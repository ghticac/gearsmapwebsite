export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  categories: string[]
  tags: string[]
  coverImage?: string
  readingTime?: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
}
