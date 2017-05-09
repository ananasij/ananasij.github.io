import React from 'react';

function About() {
    return (
        <div>
            <span id="about" className="anchor" />
            <div className="row row-section">
                <div className="row">
                    <h1 className="text-center"> page title h1 </h1>
                </div>

                <div className="row">
                    <p>
                        Some text about who I am
                    </p>
                    <h3> Skills </h3>
                    <ul>
                        <li>skill</li>
                        <li>skill</li>
                        <li>skill</li>
                        <li>skill</li>
                        <li>skill</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;

