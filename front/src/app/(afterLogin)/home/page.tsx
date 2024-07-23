import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";
import TabDecider from "./_component/TabDecider";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: () => getPostRecommends(),
  });

  const dehtdratedState = dehydrate(queryClient);

  // react-query getter
  // queryClient.getQueryData(['posts', 'recommends']);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehtdratedState}>
        {/*
         * client component 하위에 server component 두기 위해서는 상위 컴포넌트 에서 아래와 조정한다.
         */}
        <TabProvider>
          {" "}
          {/* client component */}
          <Tab /> {/* client component */}
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
