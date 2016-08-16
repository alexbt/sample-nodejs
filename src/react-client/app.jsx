import React from 'react';
import ReactDOM from 'react-dom';
import tryModules from '../nodejs/utils/tryModules';
var Client = require('node-rest-client').Client;
var client = new Client();

class App  extends React.Component {

constructor(props) {
    super(props);
    this.state = {data: 'loading...'}
   }

  componentDidMount() {
  if(!this.state){
    this.state = {data: 'loading...'}
  }
       client.get("http://localhost:8082/underscore", function (data, response) {
                 this.setState({data: data});
                 console.log(response);
             }.bind(this));
    }


  render() {
if (this.state) {
       console.log('data: ' + this.state.data);
      return <h1>Hello {this.state.data[0].firstName}</h1>
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));