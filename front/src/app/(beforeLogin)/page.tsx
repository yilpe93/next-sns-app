import Image from "next/image";
import styles from "./page.module.css";
// tailwind => 호불호 너무 심하고, 가독성 X
// Styled Component => Server Component SSR issue
// sass
// css module
// vanilla extract => Windows issue
import Link from "next/link";

import Logo from "/public/next.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Logo} alt="logo" fill objectFit="contain" />
      </div>

      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위처에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
