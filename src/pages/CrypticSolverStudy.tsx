import { Link } from 'react-router-dom';
import { ArrowLeft, Workflow } from 'lucide-react';

export default function CrypticSolverStudy() {
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
                            <span className="tag">neuro-symbolic</span>
                            <span className="tag">python</span>
                            <span className="tag">agents</span>
                            <span className="tag">orchestration</span>
                        </div>
                    </div>
                    <h1>Cryptic Crossword Solver</h1>
                    <p className="case-study-subtitle">
                        A Neuro-Symbolic Architecture: Combining LLM Reasoning with
                        Deterministic Algorithmic Tools
                    </p>
                </header>

                {/* ── Summary & Repository Link ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>Project Overview</h2>
                    <p>
                        Cryptic crosswords are a fascinating challenge for AI, requiring both semantic reasoning to interpret 
                        misleading clues and deterministic character-level manipulation to solve anagrams, hidden words, and other wordplay.
                    </p>
                    <p>
                        To solve this, I built a <strong>Neuro-Symbolic Architecture</strong>. An LLM agent acts as the semantic orchestrator 
                        (the Foreman), understanding the clue and delegating the mechanical wordplay operations to deterministic Python CLI tools (the Workers).
                    </p>
                    <p>
                        This approach ensures the LLM handles what it is best at (natural language understanding) while relying on robust Python algorithms 
                        for tasks where tokenizers fail (e.g., exact letter manipulation). The system uses iterative constraint propagation in a 2D grid 
                        to progressively narrow down candidates, explicitly yielding to human intervention when it exhausts logical deductions.
                    </p>

                    <div className="repository-cta" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
                        <h3>View the Implementation</h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                            The complete implementation, architectural details, and technical documentation are available on GitHub.
                        </p>
                        <a 
                            href="https://github.com/nikcholer/cryptic-solver" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hero-cta"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                        >
                            <Workflow size={18} /> View cryptic-solver on GitHub
                        </a>
                    </div>
                </section>

                <footer className="case-study-footer">
                    <p className="case-study-status">
                        Repository will be made public once additional polish is complete.
                    </p>
                    <Link to="/projects" className="hero-cta">
                        ← Back to all projects
                    </Link>
                </footer>
            </article>
        </div>
    );
}
