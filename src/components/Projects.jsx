import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="project-card__placeholder"
          style={project.image ? { display: 'none' } : {}}
        >
          {project.title.charAt(0)}
        </div>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--github"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--live"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
