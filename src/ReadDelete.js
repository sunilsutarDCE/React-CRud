import React, {Component} from 'react';

class ReadDelete extends Component {
  render() {
    const props = this.props;
    const body = props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.address}</td>
          <td>{user.pin}</td>
          <td>{user.country}</td>
          <td>
            <button className="btn btn-primary" onClick={() => props.onUserUpdate(user.id)}>Edit</button>
            &nbsp;
            <button className="btn btn-danger" onClick={() => props.onUserDelete(user.id)}>Delete</button>
          </td>
        </tr>
      );
    });

    return (        
            <table className={this.props.display + ' table'} >
                <Header/>
                <tbody>{body}</tbody>
            </table>     
    );
  }
}

const Header = (() => (
  <thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>Pin Code</th>
    <th>Country</th>
    <th>Actions</th>
  </tr>
  </thead>
));

export default ReadDelete;