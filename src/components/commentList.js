import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments = () =>
    this.props.comments.map((comment, index) => <li key={index}>{comment}</li>);

  render() {
    return (
      <div>
        <h3>Comment List</h3>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
