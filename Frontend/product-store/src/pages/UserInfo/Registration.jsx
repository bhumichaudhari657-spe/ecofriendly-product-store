import {Link} from 'react-router-dom';
import './Login.css';
import axios from "axios";
import { useFilter } from '../../components/FilterContext';
import { useNavigate } from 'react-router-dom';
function Registration(){

    const navigate= useNavigate();
    const{signupData,setSignupData}=useFilter();


      const handler=async(e)=>{
      e.preventDefault();
      if(!signupData.Fname || !signupData.Lname || !signupData.signupPassword || !signupData.confirmPassword || !signupData.phoneNo|| !signupData.address){
        alert('Please fill all the details');
        return;
      }
      if(signupData.signupPassword!==signupData.confirmPassword){
        alert('Password does not match with confirm password');
        return;
      }
      if(signupData.phoneNo.length!==10 || !Number(signupData.phoneNo)){
        alert('Phone number must conatin 10 digits');
        return;
      }
      const response=await axios.post('http://localhost:4200/Registration',{
      Fname:signupData.Fname,
      Lname:signupData.Lname,
      signupPassword:signupData.signupPassword ,
      confirmPassword:signupData.confirmPassword,
      phoneNo:signupData.phoneNo,
      address:signupData.address       
      })
      .then(res=>{
        console.log(res.data);
        localStorage.setItem("userId",res.data._id);
        navigate('/contibuy');
      })
  }

    return(
        <>
        <center>
        <h1 className="heading">Sign Up</h1>
        <p className="msg">Please fill in the feilds below:</p>
        <div className="login-form">
        <form onSubmit={handler}>
            <input type="text" placeholder="First name" value={signupData.Fname} onChange={(e)=>{ setSignupData({...signupData,Fname:e.target.value})}} className="login-input"/><br/>
            <input type="text" placeholder="Last name" value={signupData.Lname} onChange={(e)=>{ setSignupData({...signupData,Lname:e.target.value})}}className="login-input"/><br/>
            <input type="password" placeholder="Password" value={signupData.signupPassword} onChange={(e)=>{ setSignupData({...signupData,signupPassword:e.target.value})}}
           className="login-input"/><br/>
             <input type="password" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={(e)=>{ setSignupData({...signupData,confirmPassword:e.target.value})}} className="login-input"/><br/>
            <input type="text" placeholder="Phone Number" value={signupData.phoneNo} onChange={(e)=>{ setSignupData({...signupData,phoneNo:e.target.value})}} className="login-input"/><br/>
             <input type="text" placeholder="Address" value={signupData.address} onChange={(e)=>{ setSignupData({...signupData,address:e.target.value})}} className="login-input"/><br/>
            {/* <Link to="/contibuy"> */}
            <button type="submit" onClick={handler} className="login-btn">Create Account</button><br/>
            {/* </Link> */}
        </form>
        </div>
        </center>    
        </>
        
    )
}
export default Registration;