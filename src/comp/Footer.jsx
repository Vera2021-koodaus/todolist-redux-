import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SelectedAll} from '../redux/action'

class Footer extends Component {

    selectAll=(event)=>{
      this.props.SelectedAll(event.target.checked)
    }

  render() {
    const {courses}=this.props;
    const countDone=courses.reduce((prev,course)=>prev+ (course.done? 1:0),0)
    const totalDone=this.props.courses.length;

    return (
      <div>
          <input
          type='checkbox'
          checked={countDone===totalDone && totalDone !=0}
          onChange={this.selectAll}
          
          />
         <span>Select All</span>
         <span>{countDone}/{totalDone}{countDone >1 ? 'have':'has'}been done.</span>
      </div>
    )
  }
}
export default connect(
    state=>({
        courses:state
    }),
    {SelectedAll:SelectedAll}
)(Footer)