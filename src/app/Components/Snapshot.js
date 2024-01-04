import React  from "react";


class SnapShot extends React.Component{
 

    constructor(props) {
        super(props);
        this.state = {Value: "" };
      }
    shouldComponentUpdate() {
    return true;
  }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.Value;
    }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.Value;
      }
    
     Save = (event)=>{
      this.setState({Value : event.target.value });
    }
  render() {
    return (
      <>      
      <input type="text" id="fname" value={this.state.Value} onChange={this.Save}/>
      <button type="button">Click Me</button>  
      <div id="div1"></div>
      <div id="div2"></div>    
      </>
    );
  }
}
  


export default SnapShot;