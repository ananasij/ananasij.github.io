var React = require('react');

class About extends React.Component {

    render() {
        return (
            <div>
                <a id="about" className="anchor"></a>
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
}

module.exports = About;

