import React from "react"

class Profile extends React.Component{
  // how to use state variables
  constructor(props){
    super(props)
      //create state
      this.state = {
        count: 0,
        count2: 2,
      };
      console.log("constructor is called first")
  }

  //* these are all called life cycle methods, like how the cycle will be of this class. Constructor---> render---> componentDidMount

  componentDidMount(){ //* will be called after render just like useEffect in functional component
    // api calls 
  }

  render(){
    console.log("render is called after constructor")
    return(
      <div>
        {/* to get props */}
        <h2>Profile class comp Name - {this.props.name}</h2> 
        <h3>{this.state.count}</h3>
        <h3>{this.state.count2}</h3>
        <button onClick={()=>{
          this.setState({
            count: 1,
            count2: 3, //* will only modify this state, even we don't pass nothing to upper count
          })
        }}>count</button>
      </div>
    )
  }
}

export default Profile