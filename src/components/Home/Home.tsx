import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../redux/types";
import Typed from "react-typed";
import { Icon } from "@iconify/react";
import angleDoubleDown from "@iconify/icons-fa-solid/angle-double-down";

interface OwnProps {
  name: string;
  title: string[];
}

class Home extends React.PureComponent<OwnProps> {
  render() {
    const { name, title } = this.props;
    return (
      <section id="Home" className="full-page">
        <div>
          <h1 className="text-center">{name}</h1>
          <h5 className="text-center">
            <Typed strings={title} typeSpeed={100} loop={true} />
          </h5>
          <div className="scrolldown">
            <a href="#About">
              <Icon icon={angleDoubleDown} width={"1em"} color={"#FFF"} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { name, title } = state.profile;
  return { name, title };
};

export default connect(mapStateToProps)(Home);
