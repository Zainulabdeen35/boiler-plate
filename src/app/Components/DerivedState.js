import React from "react";
import  svg  from "../Assets";

class DerivedState extends React.Component{
  static getDerivedStateFromProps(pros, state)
  {return {Show : pros.Show};}
  shouldComponentUpdate(){
    return true;
  } 
  Change(){
    this.setState({Show:" shouldComponentUpdate()"})
  }

  render() {
    return (
      <>
      <div className=" flex w-full h-[100vh] flex-col justify-center items-center font-mono italic">
      <img src={svg} alt="*"></img>
      <h1 className="text-7xl text-center ">Welcome</h1>

      </div>
      
      </>
    );
  }
}
  


export default DerivedState;
