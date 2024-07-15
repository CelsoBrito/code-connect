import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page: number) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error('Ops, alguma coisa deu errado!');
    return [];
  }
  logger.info('Posts obtidos com sucesso');
  return response.json();
}

export default async function Home({ searchParams }: any) {
  const currentPage = searchParams?.page || 1;
  const {
    data: posts,
    prev,
    next
  } = await getAllPosts(currentPage);
  
  return (
    <main className="flex flex-wrap gap-6">
      {posts.map((post: any) => <CardPost key={post.id} post={post} />)}
      {prev && (
        <Link className="text-[#81FE88] mx-auto" href={`/?page=${prev}`}>Página Anterior</Link>
      )}
      {next && (
        <Link className="text-[#81FE88] mx-auto" href={`/?page=${next}`}>Próxima Página</Link>
      )}
    </main>
  );
}
