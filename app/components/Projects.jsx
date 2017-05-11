import React from 'react';
import Project from './Project';
import projectsContent from './../projectsContent';

function Projects() {
    const projectsList = projectsContent.map(project => (
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

    return (
        <div>
            <span id="projects" className="anchor" />
            <section className="row row-section">
                <div className="row">
                    <h2 className="text-center">Projects</h2>
                </div>
                <div className="row">
                    {projectsList}
                </div>
            </section>
        </div>
    );
}

export default Projects;
