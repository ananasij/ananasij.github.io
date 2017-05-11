import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
    return (
        <div className="container">
            <Navbar />
            <div className="container page-content">
                <About />
                <Projects />
                <Contact />
                <footer className="row row-section footer-text">
                    <p className="text-center">
                        This page is made with React, ES6, SCSS, Bootstrap, Webpack.
                    </p>
                    <p className="text-center">
                        <a
                            href="https://github.com/ananasij/ananasij.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View code on GitHub.
                        </a>
                    </p>
                    <p className="text-center">(c) Hanna Senkevich 2017</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
