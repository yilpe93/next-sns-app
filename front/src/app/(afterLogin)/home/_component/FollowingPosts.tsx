"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import { Post as IPost } from "@/model/Post";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: () => getFollowingPosts(),
    staleTime: 60 * 1000, // fresh => stale
    gcTime: 60 * 1000 * 5, // 가비지컬렉션 타임, 기본 5분 - staleTime < gcTime => 기본적오르 gcTime이 staleTime 보다 길게 설정되어야 한다.
    networkMode: "always",
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}
