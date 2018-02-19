import React, { Component } from 'react';
import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  handlePostDelete(postId) {
    this.props.onPostDelete(postId);
  }

  filterPosts(posts) {
    const filterFn = this.props.filterFn;
    return filterFn == null ? posts : posts.filter(filterFn);
  }

  getPostItem(post) {
    return (
      <div class="col s8 offset-s1 post-item" key={post.id}>
        <Post post={post} />
        <div className="post-action">
          <button className="waves-effect waves-light btn red lighten-1" onClick={() => this.handlePostDelete(post.id)}>Delete</button>
        </div>
      </div>
    );
  }

  render() {
    const posts = this.filterPosts(this.props.posts);
    const placeholder = posts == null || posts.length === 0 ? 'No articles': '';
    return (
      <div className="row">
        {posts.map(p => this.getPostItem(p))}
        {placeholder}
      </div>
    );
  }
}

// PostList.propTypes = {
//   posts: React.PropTypes.array,
//   onPostDelete: React.PropTypes.func,
//   filterFn: React.PropTypes.func
// };

export default PostList;