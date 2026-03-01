export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>© {new Date().getFullYear()} Nik Cholerton</p>
            </div>
            <div className="footer-links">
                <a href="https://github.com/nikcholer" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/nikcholerton/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}
