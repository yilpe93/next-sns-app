"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const { replace } = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    replace("/home");
    return null;
  }

  replace("/i/flow/login");

  return <Main />;
}
