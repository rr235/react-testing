import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = e => this.setState({ comment: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    // clear text after save
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <h2>Add a comment</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <textarea
            name="comment"
            id="txtComment"
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
