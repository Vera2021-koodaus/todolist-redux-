import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import { nanoid } from 'nanoid';

class List extends Component {
  render() {
    return (
      <div>
          {this.props.courses.map(
              (course)=>{return <Item key={nanoid()} {...course} />}
          )}
      </div>
    )
  }
}

export default connect(
    state=>({
        courses:state
      })
)(List)