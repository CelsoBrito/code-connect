import logger from "@/logger";
async function getPostBySlug(slug: any) {
    const url = `http://localhost:3042/posts?slug=${slug}`;
    const response = await fetch(url);
    if (!response.ok) {
      logger.error('Ops, alguma coisa deu errado!');
      return {};
    }
    logger.info('Posts obtidos com sucesso');
    const data = await response.json();
    if (data.lenght == 0) {
        return {}
    }
    
    return data[0];
}

export default async function PagePost({ params }: any) {
    await console.log(params.slug);
    
    const post = await getPostBySlug(params.slug);

    return (
        <div className="flex flex-col">
            <h1 className="text-zinc-100">{post.title}</h1>
            <h1 className="text-zinc-100">{post.slug}</h1>
        </div>
    )
}