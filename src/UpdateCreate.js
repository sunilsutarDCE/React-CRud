import React, {Component} from 'react';

class UpdateCreate extends Component {

  render() {
    const user = this.props.user;

    return (
      <form className={this.props.display}>
        <div className={this.props.errMsg=='' ? 'hidden' : 'alert alert-danger'} role="alert">{this.props.errMsg}</div>
        <div className="col-sm-7 form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name" className="form-control"
          value={user.name}
          onChange={this.props.onInputChange}
        />
        </div>
        <div className="col-sm-7 form-group">
        <label>Age *</label>
        <input
          type="number"
          name="age" className="form-control"
          value={user.age}
          onChange={this.props.onInputChange}
        />
        </div>
        <div className="col-sm-7 form-group">
        <label>Address *</label>
        <input
          type="text"
          name="address" className="form-control"
          value={user.address}
          onChange={this.props.onInputChange}
        />
        </div>
        <div className="col-sm-7 form-group">
        <label>Pin Code *</label>
        <input
          type="text"
          name="pin" className="form-control"
          value={user.pin}
          onChange={this.props.onInputChange}
        />
        </div>
        <div className="col-sm-7 form-group">
        <label>Country *</label>
        <input
          type="text"
          name="country" className="form-control"
          value={user.country}
          onChange={this.props.onInputChange}
        />
        </div>
        <div className="col-sm-7 form-group">
        {user.id ? [
          <input className="btn btn-success" key="update" type="button" value="Update" onClick={() => this.props.onUserUpdate(user)}/>,
          <span>&nbsp;</span>,
          <input className="btn btn-warning" key="cancel" type="button" value="Cancel" onClick={this.props.cancelUserUpdate}/>
        ] : [
          <input className="btn btn-success" type="button" value="Create" onClick={() => this.props.onUserCreate(user)}/>,
          <span>&nbsp;</span>,
          <input className="btn btn-warning" key="cancel" type="button" value="Cancel" onClick={this.props.cancelUserUpdate}/>
        ]}
         </div>
      </form>
    );
  }
}

export default UpdateCreate;