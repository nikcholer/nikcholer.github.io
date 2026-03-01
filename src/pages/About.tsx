export default function About() {
    return (
        <div className="page about">
            <div className="section-divider" />
            <div className="section-header">
                <h2>About Me</h2>
            </div>

            <div className="about-grid">
                <p className="about-intro">
                    I'm a <strong>development lead and technical architect</strong> pivoting into
                    the emerging discipline of <strong>AI orchestration</strong>. With deep roots in
                    full-stack development, systems design, and delivery management, I'm now focused
                    on how we can use LLMs not as chat bots, but as <strong>systematic workflow
                        engines</strong> that accelerate the entire Software Development Life Cycle.
                </p>
                <p className="about-intro">
                    My background spans enterprise .NET, React front-ends, incident management
                    platforms, and technical team leadership. What I bring to AI orchestration is
                    the <strong>systems thinking</strong> — understanding how requirements flow from
                    vague business needs through to tested, deployed code, and where intelligent
                    automation can safely accelerate each stage.
                </p>
            </div>

            <div className="skills-section">
                <div className="section-divider" />
                <h2>Skills & Focus Areas</h2>
                <div className="skills-grid">
                    <div className="skill-group">
                        <h3>AI & Orchestration</h3>
                        <ul className="skill-list">
                            <li>Agentic workflow design</li>
                            <li>LLM prompt engineering</li>
                            <li>Multi-agent systems</li>
                            <li>Requirements automation</li>
                            <li>AI-augmented SDLC</li>
                        </ul>
                    </div>
                    <div className="skill-group">
                        <h3>Architecture & Backend</h3>
                        <ul className="skill-list">
                            <li>.NET / C# (enterprise)</li>
                            <li>REST API design</li>
                            <li>SQL Server, PostgreSQL</li>
                            <li>Microservices patterns</li>
                            <li>CI/CD pipelines</li>
                        </ul>
                    </div>
                    <div className="skill-group">
                        <h3>Front-End & Tooling</h3>
                        <ul className="skill-list">
                            <li>React / TypeScript</li>
                            <li>Vite, Webpack</li>
                            <li>HTML/CSS (responsive)</li>
                            <li>Git workflows</li>
                            <li>GitHub Actions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
