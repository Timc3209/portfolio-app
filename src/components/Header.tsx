import React from "react";
import { connect } from "react-redux";
import { AppState } from "../redux/types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

interface OwnProps {
  name: string;
  github: string;
}

interface States {
  isOpen: boolean;
}

class Header extends React.Component<OwnProps, States> {
  readonly state: States = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { name, github } = this.props;
    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">{name}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <NavLink href={github} className="nav-link">
                Github
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState): OwnProps => {
  const { name, github } = state.profile;
  return { name, github };
};

export default connect(mapStateToProps)(Header);
