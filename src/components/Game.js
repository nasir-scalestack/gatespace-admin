import React from 'react';
import firebase from '../firebase';

class Game extends React.Component {
  state = {
    distance: 'far',
    image: '',
    coupon: '',
  };

  componentDidMount() {
    firebase
      .database()
      .ref('game')
      .on('value', snapshot => {
        this.setState({ ...snapshot.val() });
      });
  }

  renderContent() {
    const { distance, coupon, image } = this.state;
    if (distance === 'far') {
      return (
        <div>
          <h1>Hey you, come here!!</h1>
        </div>
      );
    }
    if (distance === 'near') {
      return (
        <div>
          <h1>Good, now come even closer I have a discount for you</h1>
        </div>
      );
    }
    if (distance === 'close') {
      return (
        <div>
          <h1>Coupon {coupon}</h1>
          <img src={image} />
        </div>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ textAlign: 'center', fontSize: '40px' }}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Game;
