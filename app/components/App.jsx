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
                <div className="row row-section">
                    <p>(c) Hanna Senkevich 2017</p>
                </div>
            </div>
        </div>
    );
}

export default App;
