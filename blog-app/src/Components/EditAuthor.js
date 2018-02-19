import React, { Component } from 'react';

class EditAuthor extends Component {
  constructor(props) {
    super(props);

    this.onAuthorChange = this.onAuthorChange.bind(this);
  }

  onAuthorChange(e) {
    this.props.onAuthorChange(e.target.value);
  }

  render() {
   return (
     <div className="row">
       <div className="input-field col s12">
         <input className="validate" id="author" type="text" name="author" value={this.props.author} onChange={this.onAuthorChange} required />
         <label htmlFor="author">Author</label>
       </div>
     </div>
   );
  }
}


export default EditAuthor;