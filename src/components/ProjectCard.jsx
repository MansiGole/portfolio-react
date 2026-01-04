function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Tech Stack:</strong> {tech}
      </p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;
