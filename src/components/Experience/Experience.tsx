import React from "react";
import { connect } from "react-redux";
import { AppState, ExperienceState } from "../../redux/types";
import { Container } from "reactstrap";
import ExperienceItem from "./ExperienceItem";

interface OwnProps {
  experience: Array<ExperienceState>;
}

class Experience extends React.PureComponent<OwnProps> {
  render() {
    const { experience } = this.props;
    console.log(experience);
    return (
      <section id="Experience" className="full-page">
        <h1 className="text-red text-header">Experience</h1>
        <hr />
        <Container className="pt-3">
          {experience &&
            experience.map((row: ExperienceState, index: number) => (
              <ExperienceItem
                name={row.name}
                title={row.title}
                date={row.date}
                location={row.location}
                lines={row.lines}
                key={index}
              />
            ))}
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { experience } = state;
  return { experience };
};

export default connect(mapStateToProps)(Experience);
