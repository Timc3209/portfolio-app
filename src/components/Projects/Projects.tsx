import React from "react";
import { connect } from "react-redux";
import { AppState, ProjectState } from "../../redux/types";
import ProjectItem from "./ProjectItem";

interface OwnProps {
  projects: Array<ProjectState>;
}

class Projects extends React.PureComponent<OwnProps> {
  render() {
    const { projects } = this.props;

    return (
      <section id="Projects" className="project-container">
        <h1 className="text-red text-header">Projects</h1>
        <hr />
        {projects &&
          projects.map((project: ProjectState, index: number) => (
            <ProjectItem
              title={project.title}
              desc={project.desc}
              thumb={project.thumb}
              link={project.link}
              github={project.github}
              build={project.build}
              background={project.background}
              key={index}
            />
          ))}
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { projects } = state;
  return { projects };
};

export default connect(mapStateToProps)(Projects);
