
import Profile from "@/component/profile";
import About from "@/component/about";
import Experience from "@/component/experience";
import Projects from "@/component/projects";
import Education from "@/component/education";
import Contact from "@/component/contact";
import Skills from "@/component/skills";
import Cv from "@/component/cv";

export default function Home() {
  return <>
    <Profile />
    <About />
    <Experience />
    {/*<Projects />*/}
    <Skills />
    <Education />
    <Contact />
    <Cv />
  </>;
}
