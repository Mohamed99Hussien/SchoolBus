import React,{ Component } from "react";
import {Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap';

import "./Appform1.css";
class Appform1 extends Component {
    render(){
  
      return(
         <div>
           <div className="d-flex w-100 hom-d">
             <div className="appl">
               Home /<span>Apply for a jop</span>
             </div>
           </div>
            <div className="Appfrom1">
        
        <h2> Driver Application Form  </h2>

       <div className="d-flex w-100 fil-div">
        <div className="fileds">
          <p className="para">
            THE INFORMATION YOU SUPPLY ON THIS FORM WILL BE TREATED IN CONFIDENCE
          </p>
          </div>
       </div>
        <div className="text">
          <p className="bor">THE INFORMATION YOU SUPPLY ON THIS FORM WILL BE TREATED IN CONFIDENCE</p>
        </div>

   
     <div className="container-label p-4">
     
   <form className="form-inp">
   <fieldset>
     <legend> Your Detailes </legend>
      <Row className="">
        <Col className="handle media-width" xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            
            id="inlineFormInput"
            placeholder="FirstName"
          />
        </Col>
        <Col className="handle media-width" style={{marginLeft: "4rem"}} xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="">
            <FormControl id="inlineFormInputGroup" placeholder="LastName" />
          </InputGroup>
        </Col>
      </Row>
      {/*  End of Row  */}
      <Row className="">
        <Col style={{width:"55%"}} className="media-width" xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className=""
            id="inlineFormInput"
            placeholder="Email Address"
          />
        </Col>
        <Col className="media-width" style={{width:"35%",marginLeft: "4rem"}} xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="">
            <FormControl id="inlineFormInputGroup" placeholder="Phone Number" />
          </InputGroup>
        </Col>
      </Row>
      {/* End OF Row */}
      <Row className="">
        <Col className="media-width" style={{width:"45%"}} xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className=""
            id="inlineFormInput"
            placeholder="Date of Birth"
          />
        </Col>
        <Col className="media-width" style={{width:"45%",marginLeft: "4rem"}} xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="">
            <FormControl id="inlineFormInputGroup" placeholder="ID Number" />
          </InputGroup>
        </Col>
      </Row>
      {/* End Of Row */}
      <Row className="">
        <Col className="media-width" style={{width:"45%"}} xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className=""
            id="inlineFormInput"
            placeholder="Boold Type"
          />
        </Col>
        <Col className="media-width" style={{width:"45%",marginLeft: "4rem"}} xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="">
            <FormControl id="inlineFormInputGroup" placeholder="Driving License Number" />
          </InputGroup>
        </Col>
      </Row>
      </fieldset>
    </form>
    
   </div>
   

   {/*End Of First Form */}

     <div className="contain-form">
<Form>
<Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
<Form.Label>simply dummy text of the printing </Form.Label>
<Form.Control className="rez-area" as="textarea" rows={5} />
</Form.Group>
</Form>
     </div>
    </div>


         </div>
        )
    }
  }
  export default Appform1;