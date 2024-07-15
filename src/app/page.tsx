import logger from "@/logger";
import { Post } from "../../public/types/HomePostType";
import { CardPost } from "./components/CardPost";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";

// const mockPost: Post = {
//   'id': 1,
//   'cover': 'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png',
//   'title': 'Introdução ao React',
//   'slug': 'introducao-ao-react',
//   'body': 'Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.',
//   'markdown': '```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```',
//   'author': {
//       'id': 101,
//       'name': 'Ana Beatriz',
//       'username': 'anabeatriz_dev',
//       'avatar': 'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png'
//   }
// }

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
