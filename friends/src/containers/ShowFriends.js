import React from 'react';
import { connect } from 'react-redux';
import FriendsListMain from './FriendsListMain';
import { Image } from 'react-bootstrap';

const ShowFriends = (props) => {
  return (
    <div id='list'>
      <ul>
        <div className='container-fluid'>
        {props.friends.friends.map((friend, index=0) => {
          return <li key={index}>
          <Image responsive className='profPic' src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png' />
          <div className='container-fluid'>       <p>Name: {friend.name}</p> 
            <p>Age: {friend.age}</p> 
            <p>Email: {friend.email}</p>
            </div>
            <button onClick={props.click} value={index}>X Unfriend</button>
            </li>
          })
        }
        </div>
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    friends: state
  }
}

export default connect(mapStateToProps)(ShowFriends);