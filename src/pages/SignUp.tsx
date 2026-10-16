import { useState } from 'react';

export default function SignUp() {
  // React state hooks allows you to preserve data across rerenders in a special state variable as well as trigger rerenders whenever that state is updated with its special function
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [formFields, setFormFields] = useState({
  //   firstName: '',
  //   email: '',
  //   password: '',
  // });

  let errorMessage = '';

  if(!email.includes('.')) {
    errorMessage = 'Email in wrong format!';
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit!');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <h1>Sign Up</h1>
      <p>Currently signing up: {email}</p>
      <p className='text-red-500 font-medium text-lg'>{errorMessage}</p>
      <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type='email'
        placeholder='Email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type='submit'>Sign Up</button>
      <p>
        Already have an account? <a href='#'>Sign in</a>
      </p>
    </form>
  );
}
