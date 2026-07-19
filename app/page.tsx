
import Profile from "@/component/profile";
import About from "@/component/about";
import Experience from "@/component/experience";
import Projects from "@/component/projects";
import Education from "@/component/education";
import Contact from "@/component/contact";

export default function Home() {
  return <>
    <Profile />
    <About />
    <Experience />
    {/*<Projects />*/}
    <Education />
    <Contact />
  </>;
}
