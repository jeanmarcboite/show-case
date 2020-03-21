import React from "react";
import PropTypes from "prop-types";
import { UnmountClosed } from "react-collapse";

class Test extends React.PureComponent {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    onUnmount();
  }

  render() {
    return <div>Test</div>;
  }
}

export class AutoUnmount extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    const { isOpened } = this.props;
    this.state = { isOpened };
    this.counter = 0;
    this.messages = [];
  }

  onRef = ref => {
    this.ref = ref;
  };

  onChange = ({ target: { checked } }) => {
    this.setState({ isOpened: checked });
  };

  render() {
    const { isOpened } = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input
              className="input"
              type="checkbox"
              checked={isOpened}
              onChange={this.onChange}
            />
          </label>
            </div>
            
      </div>
    );
  }
}
