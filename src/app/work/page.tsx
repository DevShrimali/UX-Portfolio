import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkExplorer from "@/components/work/WorkExplorer";

export default function WorkPage() {
  return (
    <SmoothScroll>
      <Header />
      <main className="bg-paper text-ink min-h-screen">
        <WorkExplorer />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
