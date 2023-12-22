import React from 'react'

interface PostItems {
    data: any
    gradientColor:string
}

const PostItems = ({ data,gradientColor }: PostItems) => {
    return (
        <a className="block py-4 hover:scale-[1.005] scale-100 active:scale-100 opacity-100 transition-transform duration-200 ease-in-out delay-0 transform" href={`/${data.title.replace(/ /g, '-').toLowerCase()}`} >
            <article>
                <h2 className="text-[28px] font-black light-link dark:dark-link" style={{ color: gradientColor }}>{data.title}</h2>
                <p className="text-[13px] text-gray-700 dark:text-gray-300">July 7, 2021</p>
                <p className="mt-1">{data.body}</p>
            </article>
        </a>
    )
}

export default PostItems

