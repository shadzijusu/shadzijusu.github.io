import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/layout/hero";
import AboutMe from "../components/ui/about-me";
import Projects from "../components/ui/projects";

export function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 flex flex-col">
        <section id="home">
          <Hero />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
