import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { ProjectState } from "../../redux/types";

const ProjectItem = ({
  title,
  desc,
  thumb,
  link,
  github,
  build,
  background,
}: ProjectState) => (
  <div className="project-page" style={{ backgroundColor: `${background}` }}>
    <Container className="py-4">
      <Row>
        <Col sm="12" md="6">
          <Row className="mb-2">
            <Col>
              <h1 className="text-white mt-2">{title}</h1>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <p className="text-white">{desc}</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <p className="text-white">Built With</p>
              <ul className="white-list">
                {build &&
                  build.map((item: string, index: number) => (
                    <li key={index} className="mb-2">
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
          <Row className="mb-4">
            {link !== "" && (
              <Col sm="12" md="6">
                <a href={link} target="blank">
                  <Button
                    outline
                    color="light"
                    size="lg"
                    className="mb-4"
                    block
                  >
                    Demo
                  </Button>
                </a>
              </Col>
            )}
            <Col sm="12" md="6">
              <a href={github} target="blank">
                <Button outline color="light" size="lg" className="mb-2" block>
                  Github
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="6" className="flex-image">
          <img src={thumb} width="400" alt={title} className="mt-2 pb-4" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProjectItem;
