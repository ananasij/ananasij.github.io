import React from 'react';

function Contact() {
    return (
        <div>
            <span id="contact" className="anchor" />
            <div className="row row-section">
                <h2>Contact</h2>
                <p>Get in touch with me via:</p>
                <p>
                    <a href="#contact" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span> Email</span>
                    </a>
                </p>
                <p>
                    <a href="#contact" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-skype" aria-hidden="true" />
                        <span> Skype</span>
                    </a>
                </p>
                <p>
                    <a href="#contact" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        <span> Github</span>
                    </a>
                </p>
                <p>
                    <a href="#contact" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        <span> Linkedin</span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contact;

