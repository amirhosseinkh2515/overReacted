import { useQuery } from '@tanstack/react-query'

export default function useCustomQuery(name,api) {

    const { isLoading, isError, data, error } =
        useQuery(
            [name],
            api,
            {
                enabled: true,
                retry: 1,
                refetchOnWindowFocus: false,
            }
        );

    return [data,isLoading, isError, error];
}
