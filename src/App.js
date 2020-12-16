import './App.css';
import React from "react";
import './App.css';


class App extends React.Component {
  state= {
    Person:{
      fullname:'Firas Kochty',
      bio:'GoMyCode Student',
      imgsrc: <img style={{height:'450px' , width:'350px' , borderRadius:'50%'}} src='./profilPhoto.png' alt=''></img>,
      profession:'Student'
    },
    show:false,
    timer:0,
    intervall: null,

  }

   hideone =() => {
   this.setState({show:!this.state.show})
   this.setState({timer:0})
 }

 componentDidMount() {
  this.setState({
    intervall: setInterval(
      () => this.setState({ timer: this.state.timer + 1 }),
      1000
    )
  });
}


render (){
  return (
<div className='App'>
  { (!this.state.show) ? 
   
  <button className='btn' onClick={this.hideone} >
    Show my profile
  </button>
  :
 <div>
  <button className='btn' onClick={this.hideone}>Hide my profile</button >
  <ul>
    <li>{this.state.Person.fullname} </li> 
    <br />
    <li>{this.state.Person.bio} </li>
    <br />
    <li>{this.state.Person.imgsrc} </li>
    <br />
    <li>{this.state.Person.profession} </li>
    </ul> 

  <span style={{color:'white',fontWeight:'bold'}}>{this.state.timer}</span>
  </div>
  }
</div>
)
}
}
export default App;