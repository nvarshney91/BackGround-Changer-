import React, { Component } from 'react';
import "../Style/ButtonList.css";
class ButtonList extends Component{
    static defaultProps={
        color: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b", "#11ff11", "#1111ff"]
    };
constructor(props){
    super(props);
    this.state={color : "majenta"};
}
changeColor(newColor){
    console.log(`newColor is: ${newColor}`);
  this.setState({color: newColor})
}
render(){
    return(
        <div className='ButtonList' style={{backgroundColor:this.state.color}}>
            {this.props.color.map(c=>{
                const colorObj={backgroundColor: c};
                return (
                <button style={colorObj} onClick={this.changeColor.bind(this,c)}>!!CLICK ME!!</button>
                );
            })}
            {/* map is used to use each color [for iterations] & arrow function can be used in place of .bind */}
        </div>
    );
  }
}
export default ButtonList;