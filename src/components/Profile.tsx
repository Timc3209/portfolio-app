import React from "react";
import { connect } from "react-redux";
import { AppState } from "../redux/types";
import Header from "./Header";
import { Container, Row, Col, Card, CardText, Button } from "reactstrap";

interface OwnProps {
  name: string;
  desc: string;
  photo: string;
  email: string;
  skills: string[];
}

class Profile extends React.PureComponent<OwnProps> {
  render() {
    const { name, desc, photo, email, skills } = this.props;
    return (
      <Container>
        <Header />
        <Row className="align-items-center">
          <Col
            className="profile-img-container"
            sm={12}
            md={{ size: 3, offset: 0 }}
            lg={{ size: 2, offset: 2 }}
          >
            <img
              src={photo}
              width="250px"
              className="rounded-circle d-block mx-auto mx-md-0"
              alt="profile-img"
            />
          </Col>
          <Col sm={12} md={{ size: 6, offset: 2 }} lg={{ size: 6, offset: 1 }}>
            <Card className="box-shadow mt-3" body>
              <h4 className="">{name}</h4>
              <hr className="my-3" />
              <span>{desc}</span>
              <div>
                {skills &&
                  skills.map((skill: string, index: number) => (
                    <Button
                      outline
                      color="primary"
                      className="mr-2 mt-3"
                      key={index}
                      disabled
                    >
                      {skill}
                    </Button>
                  ))}
              </div>
              <hr className="my-3" />
              <CardText className="text-center">{email}</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { name, desc, photo, email, skills } = state.profile;
  return { name, desc, photo, email, skills };
};

export default connect(mapStateToProps)(Profile);
