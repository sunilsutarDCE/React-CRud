import React, { Component } from 'react';
import UpdateCreate from "./UpdateCreate";
import ReadDelete from "./ReadDelete";

class App extends Component {
  constructor(props) {
    super(props);

    this.emptyUser = {
      id: null, name: '', age: '', address: '', pin: '', country: ''
    };

    this.state = {
      users: [
        { id: 1, name: 'Bill', age: 20, address: 'Pune', pin: '411041', country: 'India' },
        { id: 2, name: 'Kate', age: 25, address: 'New York', pin: '111041', country: 'USA' },
      ],
      editingUser: this.emptyUser,
      isUpdateAdd: false,
      errorMsg: ''
    };
  }

  // Check if properties are blank
  checkProperties(obj) {
    let flg=false;
    for (var key in obj) {
      if(key!='id'){      
        if (obj[key] !== null && obj[key] != ""){
          flg=false;        
        }
        else
        {
          flg=true;
          break;
        }
     }
    }
    return flg;
  }

  // Create user
  createUser = (user) => {
    let flag = this.checkProperties(user);

    if (flag) {
      this.setState({ errorMsg: 'All fields are mandatory' });
    }
    else {
      const { users } = this.state;
      if (!user.id) {
        let userIds = users.map(user => user.id);
        if (userIds.length > 0) {
          user.id = Math.max(...userIds) + 1;
        } else {
          user.id = 1;
        }
      }
      this.setState({ users: [...users, user], errorMsg: '' });
      this.resetUserUpdate();
    }
  };

  // Update user
  updateUser = (user) => {
    let flag = this.checkProperties(user);

    if (flag) {
      this.setState({ errorMsg: 'All fields are mandatory' });
    }
    else {
      const newStateUsers = this.state.users.filter((stateUser) => {
        return stateUser.id !== user.id;
      });
      newStateUsers.push(user);
      this.setState({ users: newStateUsers });
      this.resetUserUpdate();
    }
  };

  // Delete user
  deleteUser = (userId) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user) => {
        return user.id !== userId;
      })
    });
  };

  // Reset Form / User
  resetUserUpdate = () => {
    this.setState({ editingUser: this.emptyUser, isUpdateAdd: false, errorMsg: '' });
  };

  // Set user object to form for updation
  setUserToUpdate = (userId) => {
    const user = this.state.users.find((user) => user.id === userId);
    const editingUser = Object.assign({}, user);
    this.setState({ editingUser: editingUser, isUpdateAdd: true, errorMsg: '' });
  };

  // set value on change
  onInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const editingUser = Object.assign({}, this.state.editingUser);
    editingUser[name] = value;
    this.setState({ editingUser: editingUser });
  };

  // Show blank form for addtion
  addFormShow = () => {
    this.setState({ isUpdateAdd: true });
  }

  render() {
    return (
      <div className="container">
       { /* Header */ }
        <header>
          <h1>React CRUD Example
          <button className={this.state.isUpdateAdd ? 'hidden' : 'btn btn-warning pull-right'} onClick={() => this.addFormShow()}>Add User</button>
          </h1>
        </header>

        { /* Table data  */ }
        <ReadDelete display={this.state.isUpdateAdd ? 'hidden' : ''}
          users={this.state.users}
          onUserDelete={this.deleteUser} onUserUpdate={this.setUserToUpdate}
        />

      { /* Update create Form */ }
        <UpdateCreate errMsg={this.state.errorMsg} display={!this.state.isUpdateAdd ? 'hidden' : ''}
          user={this.state.editingUser}
          onUserCreate={this.createUser} onUserUpdate={this.updateUser}
          cancelUserUpdate={this.resetUserUpdate} onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;