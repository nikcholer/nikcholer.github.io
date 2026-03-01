import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <div className="page projects">
            <h2>Projects & Case Studies</h2>
            <p>A selection of my recent work focusing on AI integration and process automation.</p>

            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
