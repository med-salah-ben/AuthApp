import React,{useState} from 'react';
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom';
import {Button,Modal,Form} from 'react-bootstrap'
import {registerUser} from '../../JS/Actions.js/authActions'


const Register = () => {
    const dispatch = useDispatch()  
    const history = useHistory()

    const [show, setShow] = useState(false);
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("")
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRegister = ()=>{
      const newUser ={name,lastName,email,password}
      dispatch(registerUser(newUser))
      history.push("/dashboard")
      setName("")
      setLastName("")
      setEmail("")
      setPassword("")
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Register
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control name="name"  value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control name="lastName" value={lastName}  type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
  </Form.Group>
          <Form.Group>
          <Form.Label>Email address</Form.Label>
    <Form.Control name="email" value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" value={password}  type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose() ;
             handleRegister()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Register
