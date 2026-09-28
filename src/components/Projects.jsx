import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

// Helper to sanitize Windows backslashes and stray quotes
function normalizeImagePath(path) {
  if (!path) return '';
  let clean = path.replace(/^["']|["']$/g, '').trim().replace(/\\/g, '/');
  if (!clean.startsWith('/') && !clean.startsWith('http')) {
    clean = '/' + clean;
  }
  return clean;
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const cleanImage = normalizeImagePath(project.image);

  return (
    <div className="project-card">
      <div className="project-card__image">
        {cleanImage && !imgError ? (
          <img
            src={cleanImage}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--github"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--live"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
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
