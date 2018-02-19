import React, { Component } from 'react';
import uuid from 'uuid';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};

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
    const title = this.state.title;
    const text = this.state.text;
    let tagsSet = [];
    if (this.state.tags) {
      tagsSet = new Set(this.state.tags.split(',').map(t => t.trim()))
    }

    const createdPost = {
      id: uuid.v4(),
      title,
      text,
      tags: [...tagsSet],
      date: new Date(),
      author: this.props.author,
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
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="tags">Tags <small>(separate by comma)</small></label>
              <input name="tags" id="tags" type="text" onChange={this.onChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col s2">
              <button className="waves-effect waves-light btn grey lighten-1" onClick={this.props.onCancelClick}>Cancel</button>              
            </div>
            <div className="col s2">
              <button className="waves-effect waves-light btn" type="submit">Add</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}


export default AddPost;