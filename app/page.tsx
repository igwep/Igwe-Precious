/* import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact"; */

import { Navigation } from "./component/Navigation";
import { Hero } from "./component/Hero";
import { About } from "./component/About";
import { Projects } from "./component/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
     <Navigation />
      <main>
         <Hero /> 
    <About />
           <Projects />
        {/*  <Contact /> */}
      </main>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Alex Johnson. Built with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
