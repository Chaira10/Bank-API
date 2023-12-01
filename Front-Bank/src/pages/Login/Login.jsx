import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Login.css';

function Login() {
  return (
    <div>
    <Navbar />
    <main className="main bg-dark">
      <section className="sign-in-content">
      <div className="sign-in-container">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* Vous avez deux éléments de bouton "Sign In", vous pouvez en choisir un */}
          {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  )
}

export default Login