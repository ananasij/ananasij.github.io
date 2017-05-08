var React = require('react');
const Project = require('./Project');
const projectsContent = require('./projectsContent');

class Projects extends React.Component {

    render() {
        const projectsList = projectsContent.map((project, i) => (
            <Project
                key={i}
                name={project.name}
                thumbnail={project.thumbnail}
                description={project.description}
                url={project.url}
                repository={project.repositoryUrl}/>
        ));

        return (
            <div>
                <a id="projects" className="anchor"></a>
                <div className="row row-section">
                    <div className="row">
                        <h2 className="text-center">Projects</h2>
                    </div>
                    <div className="row">
                        {projectsList}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Projects;
