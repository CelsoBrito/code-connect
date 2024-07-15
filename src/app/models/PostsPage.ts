import { Posts } from "./Posts";

export interface PostsPage {
    first: number,
    prev: number | null,
    next: number | null,
    last: number,
    pages: number,
    items: number,
    data: Posts[]
}