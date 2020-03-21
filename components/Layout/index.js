import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./Menu";
import Header from "./Header";
import { Collapse } from "react-collapse";
import Toggle from "react-toggle";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false,
      hasInfo: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentDidMount() {
    this.mql = window.matchMedia(`(min-width: 800px)`);
    this.mql.addListener(this.mediaQueryChanged);
    this.mediaQueryChanged();
  }

  componentWillUnmount() {
    this.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: this.mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  handleChange(event) {
    // do something with event.target.checked
  }

  render() {
    const sidebar = <SidebarContent />;
    const { hasInfo } = this.state;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> Responsive React Sidebar</span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <Header title={contentHeader}>
          <div style={styles.content}>
            <div>
              <div>
                <Toggle
                  id="info-toggle"
                  defaultChecked={this.state.hasInfo}
                  onChange={({ target: { checked } }) =>
                    this.setState({ hasInfo: checked })
                  }
                />
                <label htmlFor="info-toggle">App info</label>
              </div>
              <Collapse isOpened={hasInfo}>
                <p>
                  This example will automatically dock the sidebar if the page
                  width is above 800px (which is currently{" "}
                  {this.state.docked.toString()}
                  ).
                </p>
                <p>
                  This functionality should live in the component that renders
                  the sidebar. This way you&#39;re able to modify the sidebar
                  and main content based on the responsiveness data. For
                  example, the menu button in the header of the content is now{" "}
                  {this.state.docked ? "hidden" : "shown"} because the sidebar
                  is {!this.state.docked && "not"} visible.
                </p>
              </Collapse>
            </div>
          </div>
        </Header>
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Layout;
