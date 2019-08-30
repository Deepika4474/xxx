import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
  shoot() {
    alert("login");
  }
  render() {
    return (
      <button onClick={this.shoot}>welcome to skava!!!!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
