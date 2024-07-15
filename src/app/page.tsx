import logger from "@/logger";
import { Post } from "../../public/types/HomePostType";
import { CardPost } from "./components/CardPost";

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

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error('Ops, alguma coisa deu errado!');
    return [];
  }
  logger.info('Posts obtidos com sucesso');
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  
  return (
    <main className="flex flex-wrap gap-6">
      {posts.map((post: any) => <CardPost post={post} />)}
    </main>
  );
}
