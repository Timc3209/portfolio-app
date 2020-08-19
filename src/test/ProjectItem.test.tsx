import React from "react";
import { render } from "@testing-library/react";
import ProjectItem from "../components/Projects/ProjectItem";
import { projects } from "../config/data";

test("renders recipe", () => {
  const project = projects[0];

  const { getByText } = render(
    <ProjectItem
      key={1}
      title={project.title}
      desc={project.desc}
      thumb={project.thumb}
      link={project.link}
      github={project.github}
      build={project.build}
      background={project.background}
    />
  );
  const titleElement = getByText(project.title);
  expect(titleElement).toBeInTheDocument();

  const descElement = getByText(project.desc);
  expect(descElement).toBeInTheDocument();
});
