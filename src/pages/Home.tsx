export default function Home() {
    return (
        <div className="page home">
            <section className="hero">
                <h1>Nik Cholerton</h1>
                <p className="subtitle">AI Orchestration & Systems Architecture</p>
                <p className="description">
                    Accelerating the SDLC with Agentic Workflows. I build systems that transform vague requirements
                    into working prototypes using LLM agents and deterministic tooling.
                </p>
            </section>

            <section className="philosophy">
                <h2>My Approach</h2>
                <div className="grid">
                    <div className="feature">
                        <h3>From Vague to Concrete</h3>
                        <p>Using agents to refine unstructured inputs into precise requirements and executable plans.</p>
                    </div>
                    <div className="feature">
                        <h3>Deterministic Tooling</h3>
                        <p>Pairing LLM creativity with reliable, script-driven operations for safe execution.</p>
                    </div>
                    <div className="feature">
                        <h3>Systems Thinking</h3>
                        <p>Designing workflows, not just writing code. Building resilient, repeatable patterns.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
