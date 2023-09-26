import React,{ Component } from "react";
import {Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap';
import "./Contactus.css";
import Capture from "../Asset/Capture.PNG";
import { BsFillEnvelopeFill ,BsFillTelephoneFill} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";


class Contactus extends Component {

    render(){
  
        return(

            <div>
                     <div className="d-flex w-100 hom-d">
            <div className="appl">
              Home /<span>Apply for a jop</span>
            </div>
            </div>
         <div className="Contactus">

            <h2>CONTACT US</h2>

            <h5>we are always with you and your children</h5>
  
        </div>

         <div className=" container cap">
             <img className="w-100" src={Capture} alt="" />
             <div className="contact">
                <AiFillHome />  
                 <BsFillEnvelopeFill/>
                 <BsFillTelephoneFill />
             </div>
         </div>







          <div className="send container">

              <h3>Send us a message </h3>

           <div className="send-row">

              <Row className="">
              <Col style={{width:"100%"}} className="handle media-width" xs="auto">
             <Form.Control
            
               id="inlineFormInput"
               placeholder="Name"
               />
              </Col>
              </Row>
         {/*  End of Row  */}
              <Row className="">
              <Col style={{width:"100%"}} className="handle media-width" xs="auto">
             <Form.Control
            
              id="inlineFormInput"
              placeholder="Email"
             />
             </Col>
             </Row>
          {/*  End of Row  */}
             <Row className="">
             <Col style={{width:"100%"}} className="handle media-width" xs="auto">
              <Form.Control
               id="inlineFormInput"
              placeholder="Phone"
              />
             </Col>
             </Row>
              </div>

            <div className="contain">

            <Form>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control className="rez-area" as="textarea" rows={5} placeholder="Your Message"/>
            </Form.Group>
            </Form> 

             </div>

          </div>
          <div className="apply">
                <div style={{marginRight:"10px"}}>
                    <input type="button" value="Send Now" />
                </div>
            </div>

        </div>
            


        )
    }
}

export default Contactus;
