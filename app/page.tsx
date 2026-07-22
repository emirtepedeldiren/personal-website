import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/store";

// Always render with the latest stored content; admin saves also revalidate this path.
export const revalidate = 0;

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Hero hero={content.hero} />
      <About about={content.about} />
      <Skills skills={content.skills} />
      <Projects projects={content.projects} />
      <Contact contact={content.contact} />
      <Footer />
    </main>
  );
}
