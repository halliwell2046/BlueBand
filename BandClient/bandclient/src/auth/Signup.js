import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Signup = (props) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
    fetch('http://localhost:3000/auth/signup',{
          method: 'POST',
          body: JSON.stringify({user:{email:email, password: password}}),
          headers: new Headers ({
              'Content-Type': 'application/json',
              'Authorization': props.token
          })
      })
      .then((response) => response.json()
      ).then((data) =>  {
        console.log(data)
        props.updateToken(data)
      })
      .catch(err => console.log(err))
  }
  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label noValidate action="#" method="get" htmlFor="username" className="header">Email</Label>
          <Input onChange={(e) => { setUsername(e.target.value)}} name="username" value={email} type="text" placeholder={"Email address is required"}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" className="header">Password</Label>
          <Input onChange={(e) => { setPassword(e.target.value)}} name="password" value={password}type="password" placeholder={"enter password"}/>
        </FormGroup>
        <Button className="button" type="submit">Let's Rock</Button>
      </Form>
    </div>
  )
}
export default Signup;