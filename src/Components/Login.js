import React,{useState} from 'react'
import './Login.css';
export default function Login() {
 
  const[password,setPassword]= useState('');
  const[email,setEmail]= useState('');
  const[error,setError]=useState(false);
 
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(password!=="admin" && email!=="admin")
    {
      setError(true);
    } 
    if(password==="admin" && email==="admin")
    {
       const loginObj=
       {
         
          pwd:password,
          em:email
       }
    
      alert(JSON.stringify(loginObj));
     
       
    }
  }
  return (
    <div>
    
    <div className='body1'>
         <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Book-HD-Wallpapers-download.jpeg" height="750px" width="1500px"/>
    </div>
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>Login</p>
    </div>
    <div className='form1'>
   
       
    <form onSubmit={formHolder}>
    

   E-Mail &nbsp;&nbsp; &nbsp;  &nbsp;: <input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <div>
      {error && email!=="admin"?
      <label style={{color:'red'}}>E-mail is Invalid</label>:""}
    </div>  

    <br/>
    
    Password  &nbsp;: <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
      {error && password!=="admin"?
      <label style={{color:'red'}}>Password is Invalid</label>:""}
    </div>  

    <br/>
    
    <button type="submit" class="but">Login</button>
    
    
    </form>
    </div>
  
    
    
    </div>
  )
}