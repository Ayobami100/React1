import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami';


class App extends Component  {
constructor(){
  super();
  this.state = {
    activated : false,
    name:''
  };
  this.toggleActivation = this.toggleActivation.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

toggleActivation(){
  if(this.state.activated===true){
    this.setState({activated:false});
  }else{
    this.setState({activated:true});
  }
}

handleChange(e){
console.log(e);
console.log(e.target.value);
this.setState({name:e.target.value});
}



render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" onChange={this.handleChange} placeholder="Enter your name"/><br/>
        <button onClick={this.toggleActivation}>Toggle Konami</button>
        {this.state.activated ? <Konami name={this.state.name}/> : <div>Konami code is deactivated</div>}
      </header>
      
    </div>
  );
}
}

export default App;
