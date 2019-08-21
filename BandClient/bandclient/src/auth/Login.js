import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 

const Login = (props) => {
  const [email, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/auth/login',{
      method: 'POST',
      body: JSON.stringify({user:{email, password: password}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }) .then(
      (response) => response.json()
    ) .then((data) => {
      console.log(data);
      props.updateToken(data.sessionToken);
    })
  }
 
  return(
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Email</Label>
          <Input onChange={(e) => setUsername(e.target.value)} name="username" value={email} placeholder={"Email address is required"}/> 
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder={"enter password"}/>
        </FormGroup>
        <Button type="submit">Let's Rock</Button>
      </Form>
    </div>
  )
  }

export default Login;
