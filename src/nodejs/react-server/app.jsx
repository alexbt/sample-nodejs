import React from 'react';
import ReactDOM from 'react-dom';
import tryModules from '../utils/tryModules';

class App extends React.Component {
  render() {
  var arr = [{id:1,name:'John Doe'},{id:2, name:'Will Smith'}, {id:3, name:'John Vanbiesbrouck'}];
    var blah = tryModules.filterArrayName(arr, 'Doe');
    return <h1>Hello {blah[0].firstName}</h1>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));