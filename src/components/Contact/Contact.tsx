import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-carbon/email";
import githubIcon from "@iconify/icons-carbon/logo-github";
import linkedinIcon from "@iconify/icons-carbon/logo-linkedin";

interface OwnProps {
  email: string;
  github: string;
  linkedin: string;
}

class Contact extends React.PureComponent<OwnProps> {
  render() {
    const { email, github, linkedin } = this.props;
    return (
      <section id="Contact" className="contact-page">
        <h1 className="text-white text-header">Contact</h1>
        <hr />
        <Container className="pt-4 text-center contact-container">
          <a href={`mailto:${email}`} className="btn-contact mx-3">
            <Icon icon={emailIcon} width={"2em"} />
          </a>
          <a href={github} target="blank" className="btn-contact mx-3">
            <Icon icon={githubIcon} width={"2em"} />
          </a>
          <a href={linkedin} target="blank" className="btn-contact mx-3">
            <Icon icon={linkedinIcon} width={"2em"} />
          </a>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { email, github, linkedin } = state.profile;
  return { email, github, linkedin };
};

export default connect(mapStateToProps)(Contact);
