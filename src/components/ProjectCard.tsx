import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        summary: string;
        tags: string[];
        link: string;
        status?: 'active' | 'upcoming';
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const isUpcoming = project.status === 'upcoming';
    
    return (
        <div className={`project-card ${isUpcoming ? 'upcoming' : ''}`} style={isUpcoming ? { opacity: 0.8 } : {}}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tags">
                {isUpcoming && (
                    <span className="tag" style={{ backgroundColor: 'var(--border)', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <Clock size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }}/> Upcoming
                    </span>
                )}
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            {isUpcoming ? (
                <div className="read-more" style={{ color: 'var(--text-muted)', cursor: 'not-allowed', marginTop: 'auto' }}>
                    Case Study in Progress
                </div>
            ) : (
                <Link to={project.link} className="read-more">
                    View Case Study <ArrowRight size={16} />
                </Link>
            )}
        </div>
    );
}
