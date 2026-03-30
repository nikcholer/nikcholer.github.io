import { Link } from 'react-router-dom';
import { ArrowRight, Workflow, Cpu, LayoutDashboard } from 'lucide-react';

export default function Home() {
    return (
        <div className="page home">
            <section className="hero">
                <div className="hero-eyebrow">
                    <span className="dot" />
                    [ SYSTEM STATUS: ONLINE ]
                </div>
                <h1>
                    Nik Cholerton
                </h1>
                <h1>
                    <span className="gradient-text">AI Orchestration</span>
                </h1>
                <p className="subtitle">
                    Accelerating the SDLC with agentic workflows, LLM-driven tooling,
                    and deterministic automation. Turning vague requirements into
                    working system architectures.
                </p>
                <Link to="/projects" className="hero-cta">
                    ENGAGE WORKFLOW <ArrowRight size={18} />
                </Link>
            </section>

            <section className="philosophy">
                <div className="section-divider" />
                <div className="section-header">
                    <h2>My Approach</h2>
                    <p>Where systems thinking meets AI-driven development</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Workflow size={22} />
                        </div>
                        <h3>From Vague to Concrete</h3>
                        <p>Using agentic workflows to refine unstructured business inputs into precise requirements and executable plans — systematically, not by guesswork.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Cpu size={22} />
                        </div>
                        <h3>Deterministic Tooling</h3>
                        <p>Pairing LLM creativity with reliable, script-driven operations. The LLM drafts, scripts validate, the LLM refines — safe, repeatable, auditable.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <LayoutDashboard size={22} />
                        </div>
                        <h3>Systems Thinking</h3>
                        <p>Designing workflows and orchestration layers, not just writing code. Building resilient, repeatable patterns that scale with the team.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
