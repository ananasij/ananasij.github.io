var React = require('react');

class Contact extends React.Component {

    render() {
        return (
            <div>
                <a id="contact" className="anchor"></a>
                <div className="row row-section">
                    <h2>Contact</h2>
                    <p>Get in touch with me via:</p>
                    <p><a href="#" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a></p>
                    <p><a href="#" target="_blank"><i className="fa fa-skype" aria-hidden="true"></i> Skype</a></p>
                    <p><a href="#" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i> Github</a></p>
                    <p><a href="#" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i> Linkedin</a></p>
                </div>
            </div>
        );
    }
}

module.exports = Contact;

