import { useEffect, useState } from "react";
import { ApiResult } from "@/core/types";

interface useGetFetchResult<S, F> {
  result: ApiResult<S, F> | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useGetFetch = <S, F = null>(
  path: string
): useGetFetchResult<S, F> => {
  const [result, setResult] = useState<ApiResult<S, F>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const exec = async () => {
      setResult(undefined);
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`/api/${path}`);

        if (!response.ok) throw new Error();

        const result = (await response.json()) as ApiResult<S, F>;

        setResult(result);
      } catch (error) {
        setResult(undefined);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    exec();
  }, [path]);

  return { result, isLoading, isError };
};
