import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import ShareButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@mail.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    };
    return (
      <div data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header={'2'}
            desc="Click the button to render props"
            tempArr={tempArr}
          />
          <ShareButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
