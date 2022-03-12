import React, {useState} from 'react'
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: formData.username,
        password: formData.password,
        loggedIn: true,
      })
    );
    setFormData("");
  }
  
  return (
    <div>
    <h1 className="title">Welcome! Please sign in!</h1>  
    <div className='formbody'>
        <form className = 'card p-3 col-sm-6 bg-dark' onSubmit={(e)=> handleSubmit(e)}>
        <div className='form-row'>
        <h1>Sign in</h1>
          
          <div className='col'>
          <label for="username">Username:</label>
            <input 
            type="text" 
            className='form-control' 
            id="username" placeholder='Username' 
            value={formData.username} 
            onChange={(e) => {
                setFormData({...formData, username : e.target.value});
            }}/>
          </div>

          <div className='col'>
          <label for="lastName">Password:</label>
            <input 
            type="password" 
            className='form-control' 
            id='password' placeholder='Password' 
            value={formData.password} 
            onChange={(e) => {
                setFormData({...formData, password : e.target.value});
            }}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-sm-1">Submit</button>
        <button type="submit" className="btn btn-danger col-sm-1">Guest sign in</button>
        </form>
    </div>
    </div>
  )
}

export default Login