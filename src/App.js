import React, { useState } from 'react';
import './App.css';

// Handle display of results or error messages
const Results = ({username, password, validated, errorMessage}) => {
  if(validated){
    return (
      <p> Form is validated. <br/> Username: {username}. Password: {password} </p>
    )
  }else{
    return (
      <p> Error: {errorMessage} </p>
    )
  }
}

const App = () => {

  // inititate useState hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the form submission from reloading the page
    setSubmitted(true);
    if(!username.length){
      setErrorMessage("Username cannot be blank. Please submit a username.");
    }else if(!password){
      setErrorMessage("Password cannot be blank. Please submit a password.");
    }else if(!confirmPassword){
      setErrorMessage("Confirm Password cannot be blank. Please submit a confirm password.");
    }else if(password !== confirmPassword){
      setErrorMessage("Password and confirm password do not match. Please make sure they are the same.");
    }else{
      setValidated(true);
    }
  }

  return (
    <div className="App">
      <h1>
        Simple Form
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username" />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password" />
        <button type="submit"> Submit </button>
      </form>
      {
        submitted ? (
          <Results
            username={username}
            password={password}
            errorMessage={errorMessage}
            validated={validated}
            />
        ) : null
      }
    </div>
  );
}
export default App;
