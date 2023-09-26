import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Nav";
import Appform2 from "./component/Appform2";
import Appform1 from "./component/Appform1";
import Contactus from "./component/Contactus";

class App extends Component {
  render(){

    return(
      <div id="main" className="App">
        <Navbar /> 
        <Appform1 />
        <Appform2 />
        <Contactus />
      </div>
    )
  }
}
export default App;