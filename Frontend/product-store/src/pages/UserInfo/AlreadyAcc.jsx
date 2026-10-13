import "./Login.css";
import {Link} from 'react-router-dom';
function AlreadyAcc(){
    
    return(
        <>
        <center>
        <h1 className="heading">Already have Account</h1>
        <p className="msg">Please enter your e-mail and password:</p>
        <div className="login-form">
        <form>
            <input type="text" placeholder="E-mail" className="login-input"/><br/>
            <input type="password" placeholder="Password" className="login-input"/><br/>
            <Link to="/Contibuy"><button type="button" className="login-btn" >Continue</button><br/></Link> 
        </form>
        </div>
        </center>
        
        </>
        
    )
}
export default AlreadyAcc;