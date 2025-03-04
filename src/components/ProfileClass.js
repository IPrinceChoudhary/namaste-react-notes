import React from "react"

class Profile extends React.Component{

  constructor(props){
    super(props)
      this.state = {
        userInfo: {},
      };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/IPrinceChoudhary");
    const response = await data.json()
    this.setState({
      userInfo: response
    })
  }

  //* life cycle in class - Mounting--> Updating(if state is being changed due to componentDidMount then this will start)--> Unmounting

  //* called after re-render and update cycle started.
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  // will be called after update cycle, for e.g. left the page because the component is not there so it will unmount
  componentWillUnmount(){

  }

  render(){
    console.log("render is called after constructor")
    return(
      <div>
        <h2>Profile class comp Name - {this.props.name}</h2> 
        <p>userInfo</p>
        <img src={this.state.userInfo?.avatar_url} alt="" />
        <h3>{this.state.userInfo?.name}</h3>
      </div>
    )
  }
}

export default Profile