export interface Posts {
  id: string,
  cover: string,
  title: string,
  slug: string,
  body: string,
  markdown: string,
  author: {
    id: number,
    name: string,
    username: string,
    avatar: string
  }
}