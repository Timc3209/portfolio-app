import React from "react";
import { connect } from "react-redux";
import { AppState, SkillState } from "../../redux/types";
import { Container, Row, Col } from "reactstrap";
import SkillItem from "./SkillItem";

interface OwnProps {
  skills: Array<SkillState>;
}

class Skills extends React.PureComponent<OwnProps> {
  render() {
    const { skills } = this.props;
    return (
      <section id="Skills" className="full-page">
        <h1 className="text-red text-header">Skills</h1>
        <hr />
        <Container className="pt-4">
          <Row className="text-center">
            {skills.map((skill: SkillState, index: number) => {
              if (index % 3 === 0 && index !== 0) {
                return (
                  <React.Fragment key={index}>
                    <div className="w-100 mt-2"></div>
                    <Col key={index}>
                      <SkillItem
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                        color={skill.color}
                      />
                    </Col>
                  </React.Fragment>
                );
              } else {
                return (
                  <Col key={index}>
                    <SkillItem
                      key={index}
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { skills } = state;
  return { skills };
};

export default connect(mapStateToProps)(Skills);
