import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

function normalizeImagePath(path) {
  if (!path) return '';
  let clean = path.replace(/^["']|["']$/g, '').trim().replace(/\\/g, '/');
  if (!clean.startsWith('/') && !clean.startsWith('http')) {
    clean = '/' + clean;
  }
  return clean;
}

function ProjectCard({ project, isFeatured }) {
  const [imgError, setImgError] = useState(false);
  const cleanImage = normalizeImagePath(project.image);

  return (
    <article className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}>
      <div className="project-card__image-wrap">
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
        <span className="project-card__badge">Featured Project</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <span className="section__eyebrow">Portfolio</span>
        <h2 className="section__title">Featured Projects</h2>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isFeatured={projects.length === 1 || index === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
