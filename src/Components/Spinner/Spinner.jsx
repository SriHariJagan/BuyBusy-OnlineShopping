import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner 
          radius={50} 
          color={"#ff0000"} 
          stroke={5} 
          visible={true} 
        />
      </div>
    );
  }
}
