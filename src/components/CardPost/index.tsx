import Image from "next/image"
import { Avatar } from "./Avatar";
import { Post } from "../../../public/types/HomePostType";
import Link from "next/link";

type PostType = {
    post: Post;
}

export const CardPost = ({ post }: PostType) => {
    return (
        <Link href={`/posts/${post.slug}`} className='no-underline cursor-pointer'>
            <article className='w-[486px] flex flex-col gap-[8px] rounded-[8px] overflow-hidden bg-[#171D1F] text-[#BCBCBC]'>
                <header className='w-full bg-[#888]'>
                    <figure className="p-[24px]">
                        <Image
                            className="rounded-[8px]"
                            src={post.cover}
                            width={438}
                            height={133}
                            alt={`Post'/s covers of title: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className="flex flex-col gap-[8px] w-full p-[16px]">
                    <h2 className="font-semibold text-[18px]">
                        {post.title}
                    </h2>
                    <p className="text-[15px]">{post.body}</p>
                    <p className="underline text-[#81FE88] text-[18px]">Ver detalhes</p>
                </section>
                <footer className="w-full p-[16px]">
                    <Avatar 
                        imageSrc={post.author.avatar}
                        name={post.author.name}
                    />
                </footer>
            </article>
        </Link>
    )
}
