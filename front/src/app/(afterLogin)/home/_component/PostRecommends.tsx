"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getPostRecommends } from "../_lib/getPostRecommends";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: () => getPostRecommends(),
    staleTime: 60 * 1000, // fresh => stale
    gcTime: 60 * 1000 * 5, // 가비지컬렉션 타임, 기본 5분 - staleTime < gcTime => 기본적오르 gcTime이 staleTime 보다 길게 설정되어야 한다.
    networkMode: "always",
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}
