import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import {loginUser} from "../../JS/Actions.js/authActions"
import {Button,Modal,Form} from 'react-bootstrap'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
    const handleLogin = ()=>{
      const userLogin  = {email,password} 
      dispatch(loginUser(userLogin))
      history.push("/dashboard")
      setEmail("")
      setPassword("")
    }
    const [show, setShow] = useState(false);
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" >
  
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
 
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose() ; handleLogin()}}>
             Save Changes 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Login
