import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="app-header">
            <div className="header-inner">
                <Link to="/" className="header-logo">
                    nik<span>cholerton</span>
                </Link>
                <nav>
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                </nav>
            </div>
        </header>
    );
}
