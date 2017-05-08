var React = require('react');

class Project extends React.Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 project-thumbnail">
                <div className="thumbnail">
                    <a href={this.props.url}
                       target = "_blank" >
                        <img src={this.props.thumbnail}
                             alt={this.props.name} />
                    </a>
                    <div className="caption">
                        <a href={this.props.url}
                           target = "_blank" >
                            <h3>{this.props.name}</h3>
                        </a>
                        <p className="project-description">{this.props.description}</p>
                        <a href={this.props.repository}
                           target = "_blank" >
                            <i className="fa fa-lg fa-github-square" aria-hidden="true"></i>
                            <span> View code on GitHub.</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Project;
