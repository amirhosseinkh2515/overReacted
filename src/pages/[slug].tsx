import React from 'react'
import { NextPage } from 'next'
import { useRouter } from "next/router"
import { SEO } from '@/utils/seo'
import PostsLayout from '@/layouts/postsLayout'
import { getPosts, getPostDetails } from '@/services/posts'

type Props = {
    data: any;
    [key: string]: any;
};

export async function getStaticProps({ params }: { params: any }) {
    if (!params) {
        return { notFound: true };
    }

    const { data } = await getPosts();
    const postId = data.find((p:any) => (p.title.replace(/ /g, '-').toLowerCase()) === params.slug);
    const post = await getPostDetails(postId.id).then(({ data }) => {
        return data
    })

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
        revalidate: 604800, // 1 week in seconds (60 seconds * 60 minutes * 24 hours * 7 days)
    };
}
export async function getStaticPaths() {
    const { data } = await getPosts();

    const paths = data.map((post: any) => ({
        params: {
            slug: post.title.toString().replace(/ /g, '-').toLowerCase()
        },
    }));

    return { paths, fallback: true };
};



const PostPage: NextPage<Props> = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) return <p>Loading...</p>;
    let content = <PostsLayout pageData={post} />;
    return (
        <div>
            <SEO
                title={post.title}
                description={post.description}
                image={""}
                canonical={``}
            />
            {content}
        </div>
    )
}


export default PostPage