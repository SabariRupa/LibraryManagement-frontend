import React from 'react'
import './Signup.css';
import {Link} from 'react-router-dom';
export default function() 
{
  return (
    <div>
      <div className='img2'>
       <img src="https://www.teahub.io/photos/full/16-168325_hd-wallpapers-library-background.jpg" height="750px" width="1500px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form>

       First_Name &nbsp;&nbsp;: <input type="text200"  placeholder="firstname" /><br/><br/>
      Last_Name  &nbsp;: <input type="text200"  placeholder="laststname" /><br/><br/>

      E-Mail   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"  placeholder="email" /><br/><br/>
       
       Phone_No   &nbsp;: <input type="text300"  placeholder="phone no" /><br/><br/>
       Password  &nbsp;&nbsp;: <input type="Password400" placeholder="password"/><br/><br/>
       <br/>
       <Link to="/Login"><button type="submit" class="but2">Create Account</button></Link>
       </form>
      </div>
    </div>
  )
}