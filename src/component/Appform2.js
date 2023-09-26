import React,{ Component } from "react";
import {Form,Button} from 'react-bootstrap';
import "./Appform2.css";
class Appform2 extends Component {
    render(){
  
      return(
    <div className="App-Form-Container">
      <div className="containers-div">
        <div className="contain-row">
        <div className="Appfrom2">
        <Form>
      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>simply dummy text of the printing </Form.Label>
      <Form.Control as="textarea" rows={3} />
      </Form.Group>
      {/* =============================== */}
     
      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>simply dummy text of the printing </Form.Label>
      <Form.Control as="textarea" rows={3} />
      </Form.Group>
     {/*==============================*/}
     <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>simply dummy text of the printing </Form.Label>
      <Form.Control as="textarea" rows={3} />
      </Form.Group>

     {/*========================================*/}
     
      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>simply dummy text of the printing </Form.Label>
      <Form.Control as="textarea" rows={8} />
      </Form.Group>
      
       </Form>
       
       </div>
        </div>

{/* end div */}


       <div className="note">
       <legend className="note-leg">NOTE</legend>
        <fieldset className="filed">
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
          </p>
        </fieldset>
       </div>
        </div>
        <div className="apply-s">
                <div style={{marginRight:"10px"}}>
                    <input type="button" value="Submit" />
                </div>
            </div>
    </div>
      )
    }
  }
  export default Appform2;
/* 

*/