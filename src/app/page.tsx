import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col bg-white">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  );
}
