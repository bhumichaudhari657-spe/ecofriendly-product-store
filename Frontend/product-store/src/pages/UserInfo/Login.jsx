import {Link} from 'react-router-dom';
import './Login.css';
import axios from "axios";
import { useFilter } from '../../components/FilterContext';
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate=useNavigate();
    const{loginData,setLoginData}=useFilter();

      const handler=async(e)=>{
      e.preventDefault();
      if(!loginData.email || !loginData.loginPassword){
        alert('Please fill all the details');
        return;
      }
      const response=await axios.post('http://localhost:4200/Login',{
        email:loginData.email,
        loginPassword:loginData.loginPassword,
      });
      
    alert(response.data);
    
   
    
    
    // setLoginData(response.data);
    if(response.data ==="login successfull!")
          navigate('/Registration');
  }
    
    return(
        <>
        <center>
        <h1 className="heading">Login</h1>
        <p className="msg">Please enter your e-mail and password:</p>
        <div className="login-form">
        <form onSubmit={handler}>
            <input type="text" placeholder="E-mail" className="login-input" value={loginData.email} onChange={(e)=>{ setLoginData({...loginData,email:e.target.value})}}/><br/>
            <input type="password" placeholder="E-mail Password" className="login-input" value={loginData.loginPassword} onChange={(e)=>{ setLoginData({...loginData,loginPassword:e.target.value})}}/><br/>
           {/* <Link to="/Registration"> */}
           <button type="submit" className="login-btn" >Login</button><br/>
           {/* </Link>  */}
            <p className="msg">Already have an account?
                <Link to="/AlreadyAcc" >Already Account</Link>
            </p>
        </form>
        </div>
        </center>    
        </>
    )}
export default Login;