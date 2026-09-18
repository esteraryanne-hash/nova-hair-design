import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full">{children}</div>
      </main>
      <BottomNav />
    </>
  );
}
