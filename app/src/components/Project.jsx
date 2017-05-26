import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    const technologies = props.technologies.map(technology => (
        <span
            key={technology}
            className="label label-technology"
        >
            {technology}
        </span>
    ));
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 project-thumbnail">
            <div className="thumbnail">
                <div className="project-img">
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
                </div>
                <div className="caption">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>{props.name}</h3>
                    </a>
                    <div className="project-description">
                        <p>{props.description}</p>
                        <p>{technologies}</p>
                    </div>
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
    technologies: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired
};

export default Project;
