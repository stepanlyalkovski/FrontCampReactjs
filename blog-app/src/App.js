import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import SearchBar from './Components/SearchBar';
import AddPost from './Components/AddPost';
import EditAuthor from './Components/EditAuthor';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      author: 'John',
      filterText: '',
      isCreateMode: false,
      isPostAddBtnDisabled: false
    };

    this.handleAddPost = this.handleAddPost.bind(this);
    this.onPostDelete = this.onPostDelete.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handlePostAddClick = this.handlePostAddClick.bind(this);
  }

  handleAddPost(post) {
    this.setCreateMode(false);
    this.setState(prev => {
      prev.posts.push(post);
      return { posts: prev.posts };
    });
  }

  onPostDelete(postId) {
    const updatedPosts = this.state.posts.filter(p => p.id !== postId);
    this.setState({posts: updatedPosts});
  }

  onFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  getFilterFn(filterText) {
    if(!filterText) {
      return null;
    }

    return post => post.author === filterText;
  }

  handleAuthorChange(author) {
    const isPostAddBtnDisabled = author == null || author === '';
    this.setState({author: author, isPostAddBtnDisabled: isPostAddBtnDisabled});
  }

  handlePostAddClick() {
    this.setCreateMode(true);
  }

  setCreateMode(isCreateMode) {
    this.setState(prev => ({isCreateMode: isCreateMode}));
  }

  render() {
    return (
      <div>
        <nav className=" grey darken-3" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">FrontCamp</a>
          </div>
        </nav>
        <main className="container">
          <h1 className="header center">Blog application</h1>
          <div className="row app-content">
            <div className="col s3">
              <div className="card-panel">
                <EditAuthor author ={this.state.author} onAuthorChange={this.handleAuthorChange}/>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.onFilterTextChange} />
                {!this.state.isCreateMode && <button className="waves-effect waves-light btn" onClick={this.handlePostAddClick} disabled={this.state.isPostAddBtnDisabled}>Add Post</button>}
              </div>     
            </div>
            <div className="col s8 offset-s1">
              {!this.state.isCreateMode && <PostList posts={this.state.posts} filterFn={this.getFilterFn(this.state.filterText)} onPostDelete={this.onPostDelete} />}
              {this.state.isCreateMode && <AddPost author ={this.state.author} addPost={this.handleAddPost} />}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
