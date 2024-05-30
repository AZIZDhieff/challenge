import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Project from "./Project";

function App() {
  const projects = [
    {
      imageURL: "",
      title: "Project1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      githubLink: "#",
    },
    {
      imageURL: "",
      title: "Project2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      githubLink: "#",
    },
    {
      imageURL: "",
      title: "Project3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      githubLink: "#",
    },
    {
      imageURL: "",
      title: "Project4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      githubLink: "#",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
