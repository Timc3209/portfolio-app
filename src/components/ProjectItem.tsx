import React from "react";
import { Card, CardTitle, CardImg, CardText, Button, Col } from "reactstrap";
import { ProjectState } from "../redux/types";

const ProjectItem = ({
  title,
  desc,
  thumb,
  link,
  github,
  category,
}: ProjectState) => (
  <Col sm="12" md="6" lg="4">
    <Card className="box-shadow mt-2 mb-2" body>
      <CardImg src={thumb} width="100" alt="Card image cap" />
      <CardTitle>
        <span className="h4 float-left mt-2">{title}</span>
        <Button outline color="primary" className="float-right mt-2" disabled>
          {category}
        </Button>
      </CardTitle>
      <CardText>{desc}</CardText>
      <CardText>
        <a href={link} className="mr-3">
          Demo
        </a>
        <a href={github}>Github</a>
      </CardText>
    </Card>
  </Col>
);

export default ProjectItem;
