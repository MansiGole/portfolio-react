import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "TinDog",
    description:
      "A responsive landing page for a fictional dating app for dogs, built to practice frontend development.",
    tech: "HTML, CSS, Bootstrap",
    link: "https://tin-dog-project-beta.vercel.app/"
  },
  {
    title: "HTML CSS Frontend Project",
    description:
      "A responsive frontend website built using HTML and CSS to improve layout and styling skills.",
    tech: "HTML, CSS",
    link: "https://html-css-frontend-project.vercel.app"
  },
  {
    title: "Verify My Wallet",
    description:
      "A beginner-friendly Web3 dApp that allows users to connect MetaMask and verify message signatures.",
    tech: "JavaScript, Web3, MetaMask",
    link: "https://verify-my-wallet-murex.vercel.app"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;
