import React, { Component } from 'react';
import uuid from 'uuid';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.textMaxLength = 300;
    this.titleMaxLength = 30;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit(e) {
    const createdPost = {
      id: uuid.v4(),
      date: new Date(),
      author: this.props.author,
      ...this.state
    };

    this.props.addPost(createdPost);
    e.preventDefault();
  }

  render() {
    return (
      <section className="row">
        <h2 className="subtitle">Create Post</h2>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="title">Post title</label>
              <input className="validate"  name="title" id="title" type="text" maxLength={this.titleMaxLength} onChange={this.onChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea validate" name="text" id="text" placeholder="Enter text here..." maxLength={this.textMaxLength} onChange={this.onChange} cols="30" rows="10" required></textarea>
            </div>
          </div>
          <button className="waves-effect waves-light btn" type="submit">Add</button>
        </form>
      </section>
    );
  }
}


export default AddPost;