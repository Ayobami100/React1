import React, {Component} from 'react';
import Mousetrap from 'mousetrap';



class Konami extends Component{
constructor(){
  super();
}
// componentDidMount(){
// Mousetrap.bind(`1 2 3 `,this.popUp())
// }
// componentWillMount(){
//   Mousetrap.unbind([`1 2 3 4`,`up up down down left right left right b a`])
// }
// popUp(){
//   alert('The konami code happened');
// }
render() { 
  return (
    <div>
    
    <div>Hello, {this.props.name} this is Konami</div></div>
  );
}
}
export default Konami;
