import { FC, Fragment, useEffect } from "react"
import PostItems from '@/components/postItems'
import { generateGradientColor } from '@/utils/generateGradientColor';

type HomeLayout = {
    posts: any
}

const HomeLayout: FC<HomeLayout> = ({ posts }) => {

    let postLength = posts.length - 1

    const sortedPosts = posts.sort((a:any, b:any) => {
        const dateA:any = new Date(a.date);
        const dateB:any = new Date(b.date);
        return dateA - dateB;
    });

    return (
        <div className="flex flex-col gap-y-8">
            {sortedPosts.map((data: any) => {
                const startColor = '#f3659e';
                const endColor = '#712f93';
                const gradientColor = generateGradientColor(data.id / postLength, startColor, endColor);
                return (
                    <Fragment key={data.id}>
                        <PostItems data={data} gradientColor={gradientColor} />
                    </Fragment>
                )
            })}
        </div>
    )
}

export default HomeLayout