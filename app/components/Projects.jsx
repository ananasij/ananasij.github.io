import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import projectsContent from './../contentProjects';

function Projects(props) {
    const filteredProjects = projectsContent.filter(project => (
        project.technologies.indexOf(props.selectedTechnology) !== -1
    ));

    const projectsList = (filteredProjects.length ? filteredProjects : projectsContent)
        .map(project => (
            <Project
                key={project.name}
                name={project.name}
                thumbnail={project.thumbnail}
                description={project.description}
                technologies={project.technologies}
                url={project.url}
                repository={project.repositoryUrl}
            />
    ));

    const filteredMessage = (
        <div className="row-padded-top">
            <p className="text-center">
                Showing projects made with {props.selectedTechnology}.&nbsp;
                <a
                    href="#projects"
                    className="link-technology tip--top tip--large"
                    onClick={props.onFilterReset}
                >
                    Show all.
                </a>
            </p>
        </div>
    );

    return (
        <div>
            <span id="projects" className="anchor js-jump-Projects" />
            <section className="row row-section">
                <div className="row">
                    <h2 className="text-center">Projects</h2>
                    {props.selectedTechnology ? filteredMessage : null}
                </div>
                <div className="row">
                    {projectsList}
                </div>
            </section>
        </div>
    );
}

Projects.propTypes = {
    selectedTechnology: PropTypes.string,
    onFilterReset: PropTypes.func.isRequired
};

export default Projects;
