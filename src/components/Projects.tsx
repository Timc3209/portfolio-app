import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { AppState, ProjectState, CategoryState } from "../redux/types";
import ProjectItem from "./ProjectItem";

interface OwnProps {
  projects: Array<ProjectState>;
}

class Projects extends React.PureComponent<OwnProps> {
  render() {
    const { projects } = this.props;

    return (
      <Container className="mb-4">
        <Row>
          {projects &&
            projects.map((project: ProjectState, index: number) => (
              <ProjectItem
                title={project.title}
                desc={project.desc}
                thumb={project.thumb}
                link={project.link}
                github={project.github}
                category={project.category}
                key={index}
              />
            ))}
        </Row>
      </Container>
    );
  }
}

const getEnabledCategories = (categories: Array<CategoryState>) => {
  const enabledCategories: string[] = [];

  categories.forEach((category: CategoryState) => {
    if (category.enabled) {
      enabledCategories.push(category.name);
    }
  });

  return enabledCategories;
};

const getEnabledProjects = (
  projects: Array<ProjectState>,
  categories: string[]
) => {
  const enabledProjects = projects.filter((project: ProjectState) =>
    categories.includes(project.category)
  );
  return enabledProjects;
};

const mapStateToProps = (state: AppState): OwnProps => {
  const categories = getEnabledCategories(state.categories);
  const projects = getEnabledProjects(state.projects, categories);

  return { projects };
};

export default connect(mapStateToProps)(Projects);
