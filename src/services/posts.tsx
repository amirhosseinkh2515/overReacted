import http from './httpService'
// import useCustomQuery from '@/hooks/useCustomQuery'

export function getPosts() {
    return http.get(`/posts`)
}

export function getPostDetails(id:number) {
    return http.get(`/posts/${id}`)
}

// export function getPostDetails(name: any, id: number) {
//     const [data, isLoading, isError, error] = useCustomQuery(
//         name,
//         async () => {
//             return await http.get(`/posts/${id}`)
//         }
//     );
//     return [data, isLoading, isError, error];
// }