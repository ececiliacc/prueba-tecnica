import React from "react";
import PropTypes from "prop-types";

class Scroll extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
 
    this.scrollContainer = React.createRef();
  }

  handleScroll = () => {
  
    if (this.props.loading || !this.props.hasMore) return;
  };


  render() {
    const { children } = this.props;
    return <div ref={this.scrollContainer}>{children}</div>;
  }
}

export default Scroll;
