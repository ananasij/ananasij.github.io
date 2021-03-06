import React from 'react';
import PropTypes from 'prop-types';
import jump from 'jump.js';
import { technologies, AboutText } from './../contentAbout';


class About extends React.Component {
    constructor() {
        super();
        this.state = { currentTechnology: null };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentTechnology: nextProps.currentTechnology });
    }

    handleTagClick(e) {
        if (e.target.innerText === this.state.currentTechnology) {
            this.props.onTechnologySelect(null);
        } else {
            this.props.onTechnologySelect(e.target.innerText);
        }
        jump('.js-jump-Projects');
    }

    render() {
        const technologyList = technologies.map((technology, i) => {
            let technologyNode = technology.name;
            if (technology.filter) {
                let styles = 'link-technology tip--top tip--large';
                if (technology.name === this.state.currentTechnology) {
                    styles += ' selected';
                }
                technologyNode = (
                    <a
                        href="#projects"
                        className={styles}
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleTagClick(e);
                        }}
                        data-tip
                        data-tip-content="Click to view all projects made with this technology"
                    >
                        {technology.name}
                    </a>
                );
            }
            return (
                <span key={technology.name}>
                    {technologyNode}
                    {i === technologies.length - 1 ? '' : ', '}
                </span>
            );
        });
        return (
            <div>
                <span id="about" className="anchor js-jump-About" />
                <section className="row row-section">
                    <div className="row">
                        <h1 className="text-center"> Hanna Senkevich </h1>
                        <h2 className="text-center"> Front-end developer </h2>
                    </div>

                    <div className="row row-padded-top">
                        <AboutText />
                        <h3> Technologies and tools I&apos;m using </h3>
                        <p>{technologyList}</p>
                    </div>
                </section>
            </div>
        );
    }
}

About.propTypes = {
    onTechnologySelect: PropTypes.func.isRequired,
    currentTechnology: PropTypes.string
};

About.defaultProps = {
    currentTechnology: null
};

export default About;

