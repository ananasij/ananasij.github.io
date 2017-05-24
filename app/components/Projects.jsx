import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import jump from 'jump.js';
import Project from './Project';
import projectsContent from './../contentProjects';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = { view: 'collapsed' };
    }

    toggleView() {
        const currentView = this.state.view === 'collapsed' ? 'expanded' : 'collapsed';
        this.setState({ view: currentView });
    }

    buildProjectsList(projects) {
        return projects.map(project => (
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
    }

    displayProjectsList() {
        const viewSwitch = (
            <div className="row-padded-top">
                <p className="text-center">
                    <a
                        href="#projects"
                        className="link-technology tip--top tip--large"
                        onClick={(e) => {
                            e.preventDefault();
                            this.toggleView();
                        }}
                    >
                        {this.state.view === 'collapsed' ? 'Show more' : 'Show less' }
                    </a>
                </p>
            </div>
        );
        let filteredProjects;

        if (this.props.selectedTechnology) {
            filteredProjects = projectsContent.filter(project => (
                project.technologies.indexOf(this.props.selectedTechnology) !== -1
            ));
        } else {
            filteredProjects = projectsContent;
        }

        const projectsToDisplay = this.state.view === 'collapsed' && filteredProjects.length > 6 ?
            this.buildProjectsList(filteredProjects.slice(0, 6)) :
            this.buildProjectsList(filteredProjects);

        return (
            <div>
                <div className="row">
                    <CSSTransitionGroup
                        transitionName="projects-list-easing"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {projectsToDisplay}
                    </CSSTransitionGroup>
                </div>
                <div className="row">
                    {filteredProjects.length > 6 ? viewSwitch : null}
                </div>
            </div>
        );
    }

    render() {
        const filteredMessage = (
            <div className="row-padded-top">
                <p className="text-center">
                    Showing projects made with {this.props.selectedTechnology}.&nbsp;
                    <a
                        href="#projects"
                        className="link-technology tip--top tip--large"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onFilterReset();
                            jump('.js-jump-Projects');
                        }}
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
                        {this.props.selectedTechnology ? filteredMessage : null}
                    </div>
                    {this.displayProjectsList()}
                </section>
            </div>
        );
    }
}

Projects.propTypes = {
    selectedTechnology: PropTypes.string,
    onFilterReset: PropTypes.func.isRequired
};

Projects.defaultProps = {
    selectedTechnology: null
};

export default Projects;
