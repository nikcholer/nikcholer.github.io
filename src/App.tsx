import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import CrypticSolverStudy from "./pages/CrypticSolverStudy";
import CodingStandardsStudy from "./pages/CodingStandardsStudy";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/case-studies/cryptic-solver" element={<CrypticSolverStudy />} />
                        <Route path="/case-studies/coding-standards" element={<CodingStandardsStudy />} />
                        <Route path="/case-studies/:id" element={<CaseStudy />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
