export async function getFollowingPosts() {
  const res = await fetch("http://localhost:9090/api/followingPosts", {
    next: {
      tags: ["posts", "followings"], // revalidateTag를 통한 cache 초기화하기 위한 태그 설정 값
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // revalidateTag('recoomends) => 설정 tag 값에 따른 선택 캐시 초기화
  // revalidatePath('/home') => path 값에 따른 path 내 캐시 초기화

  return res.json();
}
