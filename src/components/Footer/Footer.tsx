import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";
import { Container } from "reactstrap";

interface OwnProps {
  name: string;
}

class Footer extends React.PureComponent<OwnProps> {
  render() {
    const { name } = this.props;
    return (
      <footer className="copyright pt-4 text-center text-white">
        <Container>
          <small>{name} @ 2020</small>
        </Container>
      </footer>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { name } = state.profile;
  return { name };
};

export default connect(mapStateToProps)(Footer);
