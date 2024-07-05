import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";

export default function Home() {
  return (
    <main className={style.main}>
      {/*
       * client component 하위에 server component 두기 위해서는 상위 컴포넌트 에서 아래와 조정한다.
       */}
      <TabProvider>
        {" "}
        {/* client component */}
        <Tab /> {/* client component */}
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
