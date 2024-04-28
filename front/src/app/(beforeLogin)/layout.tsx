export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}
