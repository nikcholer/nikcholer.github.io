import { Link } from 'react-router-dom';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        summary: string;
        tags: string[];
        link: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tags">
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            <Link to={project.link} className="read-more">Read Case Study →</Link>
        </div>
    );
}
