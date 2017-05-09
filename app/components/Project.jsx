import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 project-thumbnail">
            <div className="thumbnail">
                <a
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={props.thumbnail}
                        alt={props.name}
                    />
                </a>
                <div className="caption">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>{props.name}</h3>
                    </a>
                    <p className="project-description">{props.description}</p>
                    <a
                        href={props.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-lg fa-github-square" aria-hidden="true" />
                        <span> View code on GitHub.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired
};

export default Project;
