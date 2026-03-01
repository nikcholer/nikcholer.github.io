import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
    return (
        <div className="page coming-soon">
            <h2>Case Study</h2>
            <p>
                This write-up is being prepared. Check back soon for a detailed walkthrough
                of the project, approach, and outcomes.
            </p>
            <Link to="/projects" className="back-link">
                <ArrowLeft size={16} /> Back to Projects
            </Link>
        </div>
    );
}
