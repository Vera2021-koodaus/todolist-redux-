import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import {RemoveItems, updateItems} from '../redux/action'  


class Item extends Component {

  state={
    mouse:false
  }

  bgChange=(flag)=>{
    return ()=>{this.setState({mouse:flag})}
  }





  handleRemove=(id)=>{
    this.props.RemoveItems(id)
  }

  handleChange=(id)=>{
    return(e)=>{
      this.props.updateDone(id,e.target.checked)
    }
  }


  handleSelect=(id)=>{
    return (event)=> this.props.updateItems(id,event.target.checked)

  }

  render() {

    const {id,name,done}=this.props;
    const {mouse}=this.state
    return (
      <div
      style={{backgroundColor: mouse? '#deb887':'#ffe4c4'}}
      onMouseEnter={this.bgChange(true)}
      onMouseLeave={this.bgChange(false)}
      
      >
        
        <li key={nanoid()}>
          <input type='checkbox'
          checked={done}
          onChange={this.handleSelect(id)}   
          /> 
          {name}
        <button onClick={()=>this.handleRemove(id)}>Delete</button>
        </li>
      </div>
    )
  }
}

export default connect(

  state=>({
    courses:state
  }),
  {RemoveItems:RemoveItems,
   updateItems:updateItems
  }
)(Item)