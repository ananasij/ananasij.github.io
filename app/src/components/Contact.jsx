import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { copied: false };
    }

    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 1500);
        });
    }

    render() {
        const email = (
            <CopyToClipboard
                text="hanna.senkevich@gmail.com"
                onCopy={() => this.handleCopy()}
            >
                <span>
                    <i className="fa fa-envelope" aria-hidden="true" >
                        &nbsp;
                    </i>
                    hanna.senkevich(at)gmail.com
                </span>
            </CopyToClipboard>
        );
        const emailCopied = (
            <span
                className="tip--top tip--large tip--visible"
                data-tip
                data-tip-content="Copied to the clipboard"
            >
                <i className="fa fa-envelope" aria-hidden="true" >
                    &nbsp;
                </i>
                hanna.senkevich(at)gmail.com
            </span>
        );
        return (
            <div>
                <span id="contact" className="anchor js-jump-Contact" />
                <section className="row row-section">
                    <h2 className="text-center">Contact</h2>
                    <div className="row-padded-top">
                        <p>
                            I&apos;m looking for a job!
                            Feel free to get in touch with me via any of the channels below.
                        </p>
                    </div>
                    <div className="row row-padded-bottom">
                        <div className="col-sm-6">
                            <p className="contact-option">
                                {this.state.copied ? emailCopied : email}
                            </p>
                            <p>
                                <a
                                    href="skype:hanna.senkevich?chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-skype" aria-hidden="true" >
                                        &nbsp;
                                    </i>
                                    hanna.senkevich
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://linkedin.com/in/hanna-senkevich"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" >
                                        &nbsp;
                                    </i>
                                    Linkedin
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
                                    <i className="fa fa-github-square" aria-hidden="true" >
                                        &nbsp;
                                    </i>
                                    Github
                                </a>
                            </p>
                            <p>
                                <a
                                    href="assets/app/files/HannaSenkevich_CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-file-text-o" aria-hidden="true" >
                                        &nbsp;
                                    </i>
                                    Download CV
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;

