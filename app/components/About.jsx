import React from 'react';

const about = '<p>Hi, I&apos;m a web developer from Belarus currently living in Amsterdam.</p>' +
    '<p>After more than 5 years of working in IT as a system analyst now I&apos;ve shifted ' +
    'my focus to front-end development sphere. At the moment I&apos;m looking for new career challenges.</p>' +
    '<p>As a front-end developer, I have a basic skillset and I keep learning new technologies' +
    ' to cover the gaps I currently have. I am highly analytical and I&apos;m focused on delivering solutions' +
    ' that are not only solving user and business problems but are also written in clean and structured code.</p>';

const technologies = ['Javascript', 'ES6', 'React', 'HTML', 'CSS', 'SCSS/Sass', 'Bootstrap', 'jQuery', 'Webpack',
    'ESLint', 'NPM', 'Git', 'Jira'];

function About() {
    const technologyList = technologies.map(technology => (
        <span
            key={technology}
            className="label label-technology"
        >
            {technology}
        </span>
    ));
    return (
        <div>
            <span id="about" className="anchor" />
            <section className="row row-section">
                <div className="row">
                    <h1 className="text-center"> Hanna Senkevich </h1>
                    <h2 className="text-center"> Front-end developer </h2>
                </div>

                <div className="row row-padded-top">
                    <p dangerouslySetInnerHTML={{ __html: about }} />
                </div>
                <div className="row row-padded-bottom">
                    <h3> Technologies and tools I&apos;m using </h3>
                    {technologyList}
                </div>
            </section>
        </div>
    );
}

export default About;

