import React from 'react';

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  }
];

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src={this.props.avatar_url} />
        <div className="info">
          <div className="name">{this.props.name}</div>
          <div className="company">{this.props.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="GitHub username" />
        <button>Add</button>
      </form>
    );
  }
}

const CardList = (props) => {
  const results = props.profiles.map((cardData, index) => (
    <Card key={index} {...cardData} />
  ));
  return <div>{results}</div>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">The Github Card App</div>
        <Form />
        <CardList profiles={testData} />
      </div>
    );
  }
}

export default App;
