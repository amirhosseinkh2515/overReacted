import { FC } from "react"

type post = {
    pageData: any
}

const PostsLayout: FC<post> = ({ pageData }) => {
    return (
        <article>
            <h1 className="text-[40px] font-black leading-[44px] text-[--title]">{pageData.title}</h1>
            <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">July 7, 2021</p>
            <div className="markdown mt-10">
                <p className='text-sm xl:text-base leading-7 mt-6 h-20' dangerouslySetInnerHTML={{ __html: pageData.body }} />
            </div>
        </article>
    )
}

export default PostsLayout