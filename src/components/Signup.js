import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContextAuth } from './UserContextFirebase';

function Signup() {
   const { signup } = useContext(userContextAuth);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();
      setError('');
      try {
         await signup(email, password);
         navigate('/login');
      } catch (error) {
         setError(error.message);
      }
   }

   return (
      <div className='App'>
         <form onSubmit={handleSubmit}>
            <h2>Inscrivez-vous</h2>
            {error && <h3>{error}</h3>}
            <div>
               <label htmlFor='email'>Email</label>
               <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div>
               <label htmlFor='confirmPassword'>Confirm Password</label>
               <input
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </div>
            <div>
               <button type='submit'>S'inscrire</button>
            </div>
            <p>
               Vous avez deja un compte <Link to='login'>connectez-vous</Link>
            </p>
         </form>
      </div>
   );
}

export default Signup;
