import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <div className="page projects">
            <div className="section-divider" />
            <div className="section-header">
                <h2>Projects & Case Studies</h2>
                <p>Real-world examples of AI-driven SDLC acceleration and systems automation.</p>
            </div>

            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
