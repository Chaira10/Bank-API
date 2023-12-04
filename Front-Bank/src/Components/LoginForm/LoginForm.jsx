import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GetToken } from '../../Service/apiService';
import {useDispatch} from 'react-redux';
import { setToken, setEmail, setFirstName, setLastName} from '../../features/dataReducer.js';


    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      
// Fonction pour extraire le prénom de l'adresse e-mail
const extractFirstNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      const parts = username.split('.');
      return capitalize(parts[0]);
    }
    return '';
  };
  
  // Fonction pour extraire le nom de famille de l'adresse e-mail
  const extractLastNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
  
    if (atIndex !== -1 && dotIndex !== -1 && dotIndex > atIndex) {
      const lastName = email.substring(atIndex + 1, dotIndex);
      return capitalize(lastName);
    }
  
    return null;
  };
  

function LoginForm() {
    const dispatch = useDispatch()

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate() 

    const SubmitHandler = async (event) =>{
      event.preventDefault();
      console.log("Username:", username);
        console.log("Password:", password);
      const tokenValue =  await GetToken(username,password);
      console.log("Token Value:", tokenValue);
      // tester si la valeur du token alors se rediriger vers le profil
        if(tokenValue){
          dispatch(setToken( tokenValue ));
          dispatch(setEmail( username));
          // Extraire le prénom et le nom de l'adresse e-mail
    // const firstName = extractFirstNameFromEmail(username);
    // const lastName = extractLastNameFromEmail(username);
    //         console.log(firstName, lastName);
    // dispatch(setFirstName(firstName));
    // dispatch(setLastName(lastName));

    const firstName = extractFirstNameFromEmail(username);
    const lastName = extractLastNameFromEmail(username);
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));

          navigate('/profile')
        }
        else console.log("token absent")
    }

  return (
    <div>
    <main className="main bg-dark">
    <section className="sign-in-content">
    <div className="sign-in-container">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={e => {
          document.querySelector('.MsgErrorName').style.display = "none"
          setUserName(e.target.value)
        } }/>
          <p className='MsgErrorName'>User not found !</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => {
          setPassword(e.target.value)
          document.querySelector('.MsgErrorPass').style.display = "none"
        } }/>
          <p className='MsgErrorPass'> Password is invalid</p>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button"   onClick={SubmitHandler}>Sign In</button>
      </form>
      </div>
    </section>
  </main></div>
  )
}

export default LoginForm