import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";
import { Container, Row, Col } from "reactstrap";

interface OwnProps {
  name: string;
  desc: string;
  desc2: string;
  photo: string;
}

class About extends React.PureComponent<OwnProps> {
  render() {
    const { name, desc, desc2, photo } = this.props;
    return (
      <section id="About" className="about-page">
        <h1 className="text-red text-header">About</h1>
        <hr />
        <Container className="pt-3">
          <Row>
            <Col sm="12" md="5" className="text-center mb-2">
              <img src={photo} width="300px" alt={name} />
            </Col>
            <Col sm="12" md="7">
              <Row className="mt-4">
                <Col>
                  <p>{desc}</p>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <p>{desc2}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { name, desc, desc2, photo } = state.profile;
  return { name, desc, desc2, photo };
};

export default connect(mapStateToProps)(About);
