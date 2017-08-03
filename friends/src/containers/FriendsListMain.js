import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, getFriends, frenemy } from '../actions';
import { bindActionCreators } from 'redux';
import ShowFriends from './ShowFriends';


class FriendsListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeE = this.handleChangeE.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.getFriends();
  }
  
  handleClick(event) {
    event.preventDefault();
    this.props.frenemy();
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  handleChangeA(event) {
    this.setState({
      age: event.target.value
    });
  }
  
  handleChangeE(event) {
    this.setState({
      email: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: '',
      age: '',
      email: ''
    });
    this.props.addFriend(this.state.name, this.state.age, this.state.email);
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <h1>Friends List</h1>
        <div className='container-fluid'>
        <form onSubmit={ this.handleSubmit }>
          <div className='form-group'>
          <label>Add Friend: </label>
          <input className='form-control' value={ this.state.name } placeholder='Name...' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
          <input value={ this.state.age } placeholder='Age...' onChange={this.handleChangeA} className='form-control' />
          </div>
          <div className='form-group'>
          <input value={ this.state.email } placeholder='Email...' onChange={this.handleChangeE} className='form-control' />
          </div>
          <button type='submit'>Submit</button>
        </form>
        </div>
        <div className='container-fluid'>
        <ShowFriends friends={this.props.friends} click={this.handleClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addFriend, getFriends, frenemy}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListMain);