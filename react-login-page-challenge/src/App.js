import './App.css';
import React from 'react';

function App() {

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      signUpNewsLetter: false
    }
  )

  const handleChange = (event) => {

    const {type, name, value, checked} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password check
    if (formData.password === formData.confirmPassword){
      console.log('Successfully signed up!');
    }
    else {
      console.log('Passwords do not match.');
      return;
    }

    // Sign up newsletter check
    if (formData.signUpNewsLetter) {
      console.log('Thanks for signing up for our newsletter')
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* Email field */}
        <input 
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password field */}
        <input 
          type='password'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm password field */}
        <input 
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Sign up for newsletter checkbox */}
        <input 
          type='checkbox'
          id='signUpNewsLetter'
          checked={formData.signUpNewsLetter}
          onChange={handleChange}
          value={formData.signUpNewsLetter}
          name='signUpNewsLetter'
        />
        <label htmlFor='signUpNewsLetter'>I want to join the newsletter</label>

        {/* Sign up button */}
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
