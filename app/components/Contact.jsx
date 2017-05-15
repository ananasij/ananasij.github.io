import React from 'react';

function Contact() {
    return (
        <div>
            <span id="contact" className="anchor js-jump-Contact" />
            <section className="row row-section">
                <h2>Contact</h2>
                <div className="row-padded-top">
                    <p>
                        I&apos;m looking for a job!
                        Feel free to get in touch with me via any of the channels below.
                    </p>
                </div>
                <div className="row row-padded-bottom">
                    <div className="col-sm-6">
                        <p>
                            <a
                                href="mailto:hanna.senkevich@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span> hanna.senkevich@gmail.com</span>
                            </a>
                        </p>
                        <p>
                            <a
                                href="skype:hanna.senkevich?chat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-skype" aria-hidden="true" />
                                <span> Skype: hanna.senkevich</span>
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://linkedin.com/in/hanna-senkevich-036a1062"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                <span> Linkedin</span>
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            <a
                                href="https://github.com/ananasij"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-github-square" aria-hidden="true" />
                                <span> Github</span>
                            </a>
                        </p>
                        <p>
                            <a
                                href="../app/files/HannaSenkevich_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-file-text-o" aria-hidden="true" />
                                <span> Download resume</span>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

