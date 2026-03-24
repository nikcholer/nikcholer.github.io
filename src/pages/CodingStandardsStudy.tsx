import { Link } from 'react-router-dom';
import { ArrowLeft, Workflow } from 'lucide-react';

export default function CodingStandardsStudy() {
    return (
        <div className="page case-study">
            <Link to="/projects" className="back-link">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <article className="case-study-article">
                <header className="case-study-header">
                    <div className="case-study-meta">
                        <span className="case-study-label">Case Study</span>
                        <div className="tags">
                            <span className="tag">agentic-coding</span>
                            <span className="tag">pipeline</span>
                            <span className="tag">python</span>
                            <span className="tag">knowledge-extraction</span>
                        </div>
                    </div>
                    <h1>Coding Standards Extractor</h1>
                    <p className="case-study-subtitle">
                        Mining Implicit Engineering Norms from PR History to explicitly configure AI coding agents
                    </p>
                </header>

                {/* ── Summary & Repository Link ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>Project Overview</h2>
                    <p>
                        Every engineering team has a house style. Most of it is never written down — it lives in PR review comments, in the institutional knowledge of senior reviewers, and in the friction of code review. When a new developer joins, or when an AI coding assistant starts contributing, that knowledge is invisible.
                    </p>
                    <p>
                        This project takes a different approach to writing a style guide from scratch: <strong>excavating the standards a team has already been enforcing</strong>, by reading the actual PR history.
                    </p>
                    <p>
                        The pipeline comprises four phases (Harvest → Classify → Synthesise → Output) designed to produce:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        <li>A human-reviewable register of candidate norms, each with evidence and confidence scores.</li>
                        <li>An explicit conflict report highlighting where reviewers have contradicted each other over time.</li>
                        <li>A compact <code>agents.md</code> that AI coding assistants can use as a robust operational policy.</li>
                    </ul>

                    <h3>Agentic Generation</h3>
                    <p>
                        <strong>This project was generated entirely by an AI coding agent</strong> from two planning conversations. No human wrote any of the implementation code, showcasing the power of agentic programming workflows.
                    </p>

                    <div className="repository-cta" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
                        <h3>View the Implementation</h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                            The complete implementation, architectural details, and the story of its agentic creation are available on GitHub.
                        </p>
                        <a 
                            href="https://github.com/nikcholer/coding-standards" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hero-cta"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                        >
                            <Workflow size={18} /> View coding-standards on GitHub
                        </a>
                    </div>
                </section>

                <footer className="case-study-footer">
                    <Link to="/projects" className="hero-cta">
                        ← Back to all projects
                    </Link>
                </footer>
            </article>
        </div>
    );
}
