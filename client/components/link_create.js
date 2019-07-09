import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';

class LinkCreate extends Component {

  handleSubmit = (e) => {
    e.preventDefault(); // prevent reload page of submit event
    Meteor.call('links.insert', this.refs.link.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
}

export default LinkCreate;
