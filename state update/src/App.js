import React, { Component } from 'react';
import Posts from './component/Posts';

class App extends Component {
  state = {
    posts: [
      { id: 'abc1', name: 'JS for beginners' },
      { id: 'abc2', name: 'React for beginners' },
      { id: 'abc3', name: 'Vue for beginners' },
    ],
  };

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  handleSomething = () => {
    console.log('setState update app.js');
  };

  render() {
    // деструктаризация
    const { posts } = this.state;
    return (
      <div>
        <Posts
          posts={posts}
          cb={this.handleSomething}
          removePost={this.removePost}
        />
      </div>
    );
  }
}

export default App;
