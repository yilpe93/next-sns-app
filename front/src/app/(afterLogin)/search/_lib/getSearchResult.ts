import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

export const getSearchResult: QueryFunction<
  IPost[],
  [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;

  const res = await fetch(
    `http://localhost:9090/api/search/${
      searchParams.q
    }?${searchParams.toString()}`,
    {
      next: {
        tags: ["posts", "search", searchParams.q],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // revalidateTag('recoomends) => 설정 tag 값에 따른 선택 캐시 초기화
  // revalidatePath('/home') => path 값에 따른 path 내 캐시 초기화

  return res.json();
};
