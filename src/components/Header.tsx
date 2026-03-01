import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="app-header">
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </header>
    );
}
