import React from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  Container,
} from "reactstrap";

import { Link, Events, scrollSpy } from "react-scroll";

interface States {
  isOpen: boolean;
  isTop: boolean;
}

export default class Header extends React.Component<{}, States> {
  readonly state: States = {
    isOpen: false,
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", this.checkIsTop);
    Events.scrollEvent.register("begin", () => undefined);
    Events.scrollEvent.register("end", () => undefined);
    scrollSpy.update();
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.checkIsTop);
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  checkIsTop = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeToggle = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, isTop } = this.state;
    return (
      <header>
        <Navbar
          id="navbar"
          light={isTop === false}
          dark={isTop === true}
          expand="md"
          fixed="top"
        >
          <NavbarToggler onClick={this.toggle} className="ml-auto" />
          <Container>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    Skills
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    Experience
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                    onClick={this.closeToggle}
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
