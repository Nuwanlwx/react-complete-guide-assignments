import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class  App extends  Component {

  state = {
    username: 'supermax'
  }
  usernameChangedHandler = (event) => {
    this.setState({username:event.target.value});
  }
  render(){
    return (
        <div className="App">
          <UserInput
              changed={this.usernameChangedHandler}
          currentName={this.state.username}
          />
          <UserOutput userName={this.state.username} />

          <UserInput />
          <UserOutput userName={this.state.username} />
          <UserInput />
          <UserOutput />
        </div>
    );
  }

}

export default App;
