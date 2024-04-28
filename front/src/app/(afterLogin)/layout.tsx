// layout => 리렌더링 X
// template => 리렌더링 O

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      에프터 로그인 레이아웃
      {children}
    </div>
  );
}
