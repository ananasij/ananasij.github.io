const React = require('react');
const About = require('./About');
const Projects = require('./Projects');
const Contact = require('./Contact');
const Navbar = require('./Navbar');

class App extends React.Component {

    render() {
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
}

module.exports = App;
