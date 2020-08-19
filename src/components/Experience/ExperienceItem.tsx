import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter } from "reactstrap";
import { ExperienceState } from "../../redux/types";

const ExperienceItem = ({
  name,
  title,
  date,
  location,
  lines,
}: ExperienceState) => (
  <Card className="mb-4 border-0 box-shadow">
    <CardHeader className="bg-white">
      <span className="lead">{name}</span>{" "}
      <span className="float-right">{title}</span>
    </CardHeader>
    <CardBody>
      <CardTitle />
      <ul className="dark-list">
        {lines &&
          lines.map((item: string, index: number) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
      </ul>
    </CardBody>
    <CardFooter className="text-muted">
      {date} | {location}
    </CardFooter>
  </Card>
);

export default ExperienceItem;
