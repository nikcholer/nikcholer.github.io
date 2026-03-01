import { Link } from 'react-router-dom';
import { ArrowLeft, Workflow, Cpu, LayoutDashboard, Search, RefreshCw } from 'lucide-react';

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

                {/* ── Problem ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>The Problem</h2>
                    <p>
                        Cryptic crosswords are a fascinating challenge for AI. Each clue
                        encodes a <strong>definition</strong> alongside precise{' '}
                        <strong>wordplay instructions</strong> — anagrams, hidden words,
                        reversals, charades, containers — disguised under deliberately
                        misleading surface readings.
                    </p>
                    <p>
                        Neither approach works in isolation:
                    </p>
                    <div className="problem-split">
                        <div className="problem-card">
                            <h3>LLMs Alone</h3>
                            <p>
                                Language models understand clue semantics and can identify
                                indicator words, but fail at exact letter manipulation. They
                                cannot reliably verify that "POTASSIUM" is an anagram of
                                "atoms up is" — the tokeniser doesn't work at the character
                                level.
                            </p>
                        </div>
                        <div className="problem-card">
                            <h3>Algorithms Alone</h3>
                            <p>
                                Pure algorithmic solvers can perfectly validate anagrams and
                                patterns, but cannot parse which fragment of natural language
                                is the definition vs. the fodder. They have no semantic
                                understanding of the clue surface.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Approach ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>The Approach: Two-Engine Architecture</h2>
                    <p>
                        The solver uses a <strong>"Foreman and Workers"</strong> architecture.
                        An LLM agent acts as the semantic orchestrator, delegating mechanical
                        operations to deterministic Python CLI tools. Each engine handles what
                        it's best at.
                    </p>

                    <div className="architecture-pipeline">
                        <div className="pipeline-step">
                            <div className="pipeline-icon">
                                <Search size={20} />
                            </div>
                            <div className="pipeline-content">
                                <h3>1. The Parser <span className="pipeline-tag">LLM</span></h3>
                                <p>
                                    Reads the clue and identifies the <em>definition</em> vs.{' '}
                                    <em>wordplay</em> segments. Detects indicator words ("smashing"
                                    → anagram indicator, "buried in" → hidden word indicator) and
                                    extracts the operational fodder.
                                </p>
                            </div>
                        </div>
                        <div className="pipeline-step">
                            <div className="pipeline-icon">
                                <Cpu size={20} />
                            </div>
                            <div className="pipeline-content">
                                <h3>2. The Solver <span className="pipeline-tag">Deterministic</span></h3>
                                <p>
                                    The LLM routes the parsed components to specialised Python CLI
                                    tools — <code>anagram.py</code>, <code>hidden.py</code>,{' '}
                                    <code>charade.py</code>, <code>insertion.py</code>,{' '}
                                    <code>reversal.py</code> — which run optimised searches against
                                    a 350K-word dictionary with pattern matching.
                                </p>
                            </div>
                        </div>
                        <div className="pipeline-step">
                            <div className="pipeline-icon">
                                <LayoutDashboard size={20} />
                            </div>
                            <div className="pipeline-content">
                                <h3>3. The Judge <span className="pipeline-tag">LLM</span></h3>
                                <p>
                                    Ranks the algorithmically-generated candidates against the
                                    definition using semantic similarity. Prevents combinatorial
                                    explosions from overwhelming the output.
                                </p>
                            </div>
                        </div>
                        <div className="pipeline-step">
                            <div className="pipeline-icon">
                                <RefreshCw size={20} />
                            </div>
                            <div className="pipeline-content">
                                <h3>4. Grid Constraint Propagation <span className="pipeline-tag">Hybrid</span></h3>
                                <p>
                                    A spatial grid manager tracks all intersecting clues. Each
                                    committed answer unlocks <em>checking letters</em> for
                                    intersecting clues, progressively narrowing the search space —
                                    treating the puzzle as a live Constraint Satisfaction Problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Artefacts ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>Artefacts Produced</h2>
                    <div className="artefacts-grid">
                        <div className="artefact-item">
                            <h3>SKILL.md</h3>
                            <p>An "agent contract" — the instruction set that tells any compatible
                                agent runtime how to orchestrate the Python tools, including the
                                full execution loop and termination conditions.</p>
                        </div>
                        <div className="artefact-item">
                            <h3>5 × Python CLI Tools</h3>
                            <p>Standalone solvers for anagrams, hidden words, charades,
                                insertions, and reversals. Each takes structured input and
                                outputs JSON — composable, testable, agent-agnostic.</p>
                        </div>
                        <div className="artefact-item">
                            <h3>Grid State Manager</h3>
                            <p>A 2D spatial array that maintains the crossword grid, calculates
                                intersecting patterns, detects conflicts, and persists state
                                across iterative solve passes.</p>
                        </div>
                        <div className="artefact-item">
                            <h3>Knowledge Bases</h3>
                            <p>A 350K-word dictionary, 28K cryptic abbreviations mapping,
                                and 50K indicator words categorised by clue type — all
                                locally-hosted, no API dependencies.</p>
                        </div>
                    </div>
                </section>

                {/* ── Key Insight ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>Key Insight: Graceful Yielding</h2>
                    <p>
                        A critical design decision was the <strong>termination condition</strong>.
                        Cryptic crosswords often include clues that rely on niche general
                        knowledge, thematic wordplay, or novel constructions that no predefined
                        tool can handle. Rather than hallucinating answers, the agent is
                        explicitly instructed to:
                    </p>
                    <blockquote className="case-study-quote">
                        "If a full sweep of remaining clues completes without placing
                        any new answers, stop. Output the partial grid and remaining
                        clues with their current constraints. Yield to the human."
                    </blockquote>
                    <p>
                        This pattern — <strong>attempt → constrain → yield</strong> — is
                        transferable to any domain where an LLM agent works alongside humans.
                        It prevents infinite loops, avoids confident-but-wrong outputs, and
                        keeps the human in the loop for the genuinely hard problems.
                    </p>
                </section>

                {/* ── What Worked ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>What Worked</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <Workflow size={20} />
                            </div>
                            <h3>Clean Separation of Concerns</h3>
                            <p>The LLM never touches string manipulation. The algorithms never
                                interpret natural language. Each engine is independently testable.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <Cpu size={20} />
                            </div>
                            <h3>CLI-as-API Pattern</h3>
                            <p>Python scripts accept structured arguments and return JSON. This
                                makes them agent-runtime agnostic — they work with any LLM that
                                can execute shell commands.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <RefreshCw size={20} />
                            </div>
                            <h3>Iterative Constraint Propagation</h3>
                            <p>Each solved clue narrows the search space for intersecting clues.
                                A "Double Definition" with 40K candidates shrinks to dozens once
                                crossing letters are known.</p>
                        </div>
                    </div>
                </section>

                {/* ── Tech ── */}
                <section className="case-study-section">
                    <div className="section-divider" />
                    <h2>Technology</h2>
                    <div className="tech-stack">
                        <span className="tag">Python</span>
                        <span className="tag">LLM Agents</span>
                        <span className="tag">SKILL.md</span>
                        <span className="tag">CLI Tooling</span>
                        <span className="tag">JSON State</span>
                        <span className="tag">Constraint Propagation</span>
                        <span className="tag">YAML</span>
                        <span className="tag">CMUdict</span>
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
